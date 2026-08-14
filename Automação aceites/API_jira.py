import os
from collections import defaultdict
from pathlib import Path

import requests
from requests.auth import HTTPBasicAuth

try:
    from dotenv import load_dotenv
    load_dotenv(Path(__file__).with_name(".env"))
except Exception:
    pass

# --- CONFIGURAÇÕES DE ACESSO ---
DOMAIN = os.getenv("JIRA_DOMAIN", "SEU-DOMINIO.atlassian.net")
EMAIL = os.getenv("JIRA_EMAIL", "seu_email@empresa.com")
API_TOKEN = os.getenv("JIRA_API_TOKEN", "SEU_API_TOKEN")
JIRA_SERVER = f"https://{DOMAIN}"

# --- ENDPOINT E FILTRO JQL ---
API_URL = f"{JIRA_SERVER}/rest/api/3/search/jql"

DEFAULT_JQL = (
    'status = "Aceite do Solicitante" '
    'AND project = PDS '
    'AND "time responsável[dropdown]" IN ('
    '"Sistemas - Dados", '
    '"Sistemas - Gestão ERP/Backoffice", '
    '"Sistemas - Gestão Lis/Ris - PACS - Laboratório", '
    '"Sistemas - Hospital", '
    '"Sistemas - Operadora"'
    ') '
    'ORDER BY reporter DESC, created DESC'
)


def get_issues(jql_query: str | None = None, max_results: int = 80):
    """Consulta chamados do Jira usando a API REST do Atlassian."""
    payload = {
        "jql": jql_query or DEFAULT_JQL,
        "maxResults": max_results,
        "fields": ["summary", "status", "reporter", "created", "assignee"],
    }

    response = requests.post(
        API_URL,
        json=payload,
        headers={"Accept": "application/json"},
        auth=HTTPBasicAuth(EMAIL, API_TOKEN),
        timeout=30,
    )

    if response.status_code != 200:
        raise RuntimeError(f"Erro {response.status_code}: {response.text}")

    data = response.json()
    issues = []

    for issue in data.get("issues", []):
        fields = issue.get("fields", {})
        reporter = fields.get("reporter") or {}
        assignee = fields.get("assignee") or {}

        issues.append(
            {
                "key": issue.get("key"),
                "summary": fields.get("summary", "Sem resumo"),
                "reporter": reporter.get("displayName", "Sem relator"),
                "reporter_email": reporter.get("emailAddress"),
                "assignee": assignee.get("displayName", "Sem responsável"),
                "created": fields.get("created"),
                "status": (fields.get("status") or {}).get("name", "Sem status"),
            }
        )

    return data.get("total", 0), issues


def get_relatorio(jql_str: str | None = None, maxResults: int = 50):
    """Compatibilidade com o código anterior que esperava um dicionário agrupado por relator."""
    total, issues = get_issues(jql_query=jql_str, max_results=maxResults)

    relators = defaultdict(list)
    relator_emails = {}

    for issue in issues:
        reporter = issue["reporter"]
        email = issue.get("reporter_email")
        if email:
            relator_emails[reporter] = email
        relators[reporter].append(
            {
                "key": issue["key"],
                "summary": issue["summary"].replace("\n", " "),
                "status": issue["status"],
            }
        )

    return {
        "total": total,
        "relators": dict(relators),
        "emails": relator_emails,
    }


def print_issues(issues_data):
    total, issues = issues_data
    print(f"Total de chamados encontrados: {total}\n")

    for issue in issues:
        print(f"[{issue['key']}] {issue['summary']}")
        print(f"  └─ Relator: {issue['reporter']} | Responsável: {issue['assignee']} | Status: {issue['status']}")
        print(f"     Criado em: {issue['created']}\n")


if __name__ == "__main__":
    print_issues(get_issues())
