import os
import smtplib
from datetime import datetime
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart
from html import escape
from pathlib import Path

from dotenv import load_dotenv

from API_jira import get_relatorio

load_dotenv(Path(__file__).with_name(".env"))

JIRA_BASE_URL = os.getenv("JIRA_BASE_URL", "https://unimedvr.atlassian.net")
SMTP_HOST = os.getenv("SMTP_HOST", "smtp.office365.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", "587"))
SMTP_USER = os.getenv("SMTP_USER")
SMTP_PASSWORD = os.getenv("SMTP_PASSWORD")
SENDER_EMAIL = os.getenv("SENDER_EMAIL", SMTP_USER)
SIGNATURE_IMAGE_PATH = Path(
    os.getenv("SIGNATURE_IMAGE_PATH", Path(__file__).with_name("assinatura.png"))
)


def first_name(full_name: str) -> str:
    parts = (full_name or "").strip().split()
    return parts[0].capitalize() if parts else "Usuário"


def issue_link(key: str) -> str:
    return f"{JIRA_BASE_URL}/browse/{key}"


def generate_messages(data):
    msgs = []
    for gestor, entries in data["gestores"].items():
        gestor_email = data["emails"].get(gestor)
        if not gestor_email:
            continue

        issue_lines_html = "<br>".join(
            f'<a href="{escape(issue_link(entry["key"]), quote=True)}">'
            f"{escape(entry['key'])}</a> - {escape(entry['summary'])} "
            f"({escape(entry['reporter'])})"
            for entry in entries
        )
        issue_lines_text = "\n".join(
            f"{issue_link(entry['key'])} - {entry['summary']} ({entry['reporter']})"
            for entry in entries
        )
        name = first_name(gestor)
        body = (
            f"<p>Bom dia, {escape(name)}!</p>"
            "<p>Gostaria de verificar com você sobre os seguintes chamados:</p>"
            f"<p>{issue_lines_html}</p>"
            '<p>Que hoje estão com o status de "Aguardando aceite do solicitante" '
            "a mais de 4 dias.</p>"
            "<p>Poderia verificar com os relatores se está tudo correto por favor?</p>"
            "<p>Se sim, solicito o aceite nos chamados em questão.</p>"
            "<p>Atenciosamente,</p>"
            "<p>Gabriel Fernandes Estevão Apratto<br>"
            "Tecnologia da informação - Unimed Volta Redonda</p>"
            '<p><img src="cid:assinatura" alt="Unimed Volta Redonda" '
            'style="display:block; width:408px; max-width:100%; height:auto;"></p>'
        )
        text_body = (
            f"Bom dia, {name}!\n\n"
            "Gostaria de verificar com você sobre os seguintes chamados:\n\n"
            f"{issue_lines_text}\n\n"
            'Que hoje estão com o status de "Aguardando aceite do solicitante" '
            "a mais de 4 dias.\n\n"
            "Poderia verificar com os relatores se está tudo correto por favor?\n\n"
            "Se sim, solicito o aceite nos chamados em questão.\n\n"
            "Atenciosamente,\n\n"
            "Gabriel Fernandes Estevão Apratto\n"
            "Tecnologia da informação - Unimed Volta Redonda"
        )

        msgs.append(
            {
                "to_name": gestor,
                "to_email": gestor_email,
                "issue_key": ", ".join(entry["key"] for entry in entries),
                "message": body,
                "text_message": text_body,
            }
        )
    return msgs
#==================================================
#grava as mensagens em um arquivo .txt
#==================================================
def save_messages(msgs, path: str | Path = "mensagens.txt"):
    p = Path(path)
    with p.open("w", encoding="utf-8") as f:
        for msg in msgs:
            f.write(f"Para: {msg['to_name']} <{msg['to_email']}>\n")
            f.write(f"Assunto: Verificação do chamado {msg['issue_key']}\n")
            f.write(msg["text_message"] + "\n")
            f.write("-" * 60 + "\n")
    return p


def send_email(to_email: str, subject: str, body: str):
    if not SMTP_USER or not SMTP_PASSWORD:
        raise RuntimeError(
            "Configure as variáveis SMTP_USER e SMTP_PASSWORD antes de enviar e-mails."
        )

    if not SIGNATURE_IMAGE_PATH.is_file():
        raise FileNotFoundError(
            f"Imagem da assinatura não encontrada: {SIGNATURE_IMAGE_PATH}"
        )

    message = MIMEMultipart("related")
    message.attach(MIMEText(body, "html", "utf-8"))
    with SIGNATURE_IMAGE_PATH.open("rb") as image_file:
        image = MIMEImage(image_file.read())
    image.add_header("Content-ID", "<assinatura>")
    image.add_header("Content-Disposition", "inline", filename=SIGNATURE_IMAGE_PATH.name)
    message.attach(image)
    message["Subject"] = subject
    message["From"] = SENDER_EMAIL or SMTP_USER
    message["To"] = to_email

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_USER, SMTP_PASSWORD)
        server.send_message(message)

    return True
#==================================================
#registra o hitórico de emails enviados em um arquivo de log
#==================================================
def save_log(entries, path: str | Path = "log_envio.txt"):
    p = Path(path)
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    with p.open("a", encoding="utf-8") as f:
        f.write(f"[{timestamp}]\n")
        for entry in entries:
            status = "ENVIADO" if entry.get("sent") else "FALHA"
            f.write(
                f"{status} | {entry['issue_key']} | {entry['to_name']} | {entry['to_email']}\n"
            )
        f.write("-" * 60 + "\n")

    return p


def send_messages(msgs):
    sent = []
    for msg in msgs:
        subject = "Verificação dos chamados aguardando aceite"
        ok = send_email(msg["to_email"], subject, msg["message"])
        sent.append({**msg, "sent": ok})
    return sent


if __name__ == "__main__":
    data = get_relatorio()

#==================================================
    #monta o corpo do email
#==================================================
    messages = generate_messages(data)

    if not messages:
        print("Nenhuma mensagem gerada. Verifique o filtro do Jira e os emails dos relatores.")
        save_log([], "log_envio.txt")
    else:
        output_path = save_messages(messages, "mensagens.txt")
        print(f"Mensagens geradas: {len(messages)} -> {output_path}")

        if SMTP_USER and SMTP_PASSWORD:
            try:
                sent_messages = send_messages(messages)
                save_log(sent_messages, "log_envio.txt")
                print(f"E-mails enviados com sucesso: {len(sent_messages)}")
            except Exception as exc:
                print(f"Erro ao enviar e-mails: {exc}")
                save_log([{"issue_key": "ERRO", "to_name": "Sistema", "to_email": "", "sent": False}], "log_envio.txt")
        else:
            print("Dados SMTP não configurados. Ajuste SMTP_USER e SMTP_PASSWORD para enviar os e-mails.")
            save_log([{"issue_key": "SMTP", "to_name": "Sistema", "to_email": "", "sent": False}], "log_envio.txt")
