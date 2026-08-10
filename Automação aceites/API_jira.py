import os
from jira import JIRA
from collections import defaultdict
from typing import Optional

# Configurações de acesso
JIRA_SERVER = "https://unimedvr.atlassian.net"
JIRA_EMAIL = "gabriel.apratto@unimedvr.com.br"
JIRA_API_TOKEN = "ATATT3xFfGF09VEuOrCJCuE-gKW5WLaIWKt64rW8y4me-jo0Da_udz5H8-EAHjv0MEl7GAGAVevKpWUKS4daiyexlZmQ1OwT_Ob9QC-8v6OVTwuiIxkHPTaswUgG5Hdg6GYh2jLvVgT03xyilExGOA522exoaFDrxLpAxDWtPT8ArORjNXgHxT8=C2C910ED"  # Gerado em: https://id.atlassian.com/manage-profile/security/api-tokens


DEFAULT_JQL = '''
status = "Aceite do Solicitante"
AND project = PDS
AND "time responsável[dropdown]" IN (
    "Sistemas - Dados",
    "Sistemas - Gestão ERP/Backoffice",
    "Sistemas - Gestão Lis/Ris - PACS - Laboratório",
    "Sistemas - Hospital",
    "Sistemas - Operadora"
)
ORDER BY reporter DESC, created DESC
'''


def get_relatorio(jql_str: Optional[str] = None, maxResults: int = 60):
    """Consulta o Jira e retorna dados estruturados para relatórios."""
    jira = JIRA(server=JIRA_SERVER, basic_auth=(JIRA_EMAIL, JIRA_API_TOKEN))
    issues = jira.search_issues(jql_str or DEFAULT_JQL, maxResults=maxResults)

    relators = defaultdict(list)
    relator_emails = {}
    for issue in issues:
        reporter = issue.fields.reporter.displayName if issue.fields.reporter else 'Unknown'
        email = getattr(issue.fields.reporter, 'emailAddress', None) if issue.fields.reporter else None
        if reporter not in relator_emails and email:
            relator_emails[reporter] = email
        relators[reporter].append({
            'key': issue.key,
            'summary': (issue.fields.summary or '').replace('\n', ' '),
            'status': issue.fields.status.name
        })

    return {
        'total': len(issues),
        'relators': relators,
        'emails': relator_emails
    }


def _print_relatorio(data):
    print(f"Total de tarefas encontradas: {data['total']}\n")
    for reporter, entries in sorted(data['relators'].items(), key=lambda x: x[0] or ''):
        print("Chave:")
        for e in entries:
            print(f"{e['key']}: {e['summary']}")
        print(f"Relator: {reporter}")
        print(f"Email do relator: {data['emails'].get(reporter, 'N/A')}")
        print("-" * 40)


if __name__ == '__main__':
    data = get_relatorio()
    _print_relatorio(data)

 