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
TEST_EMAIL = os.getenv("TEST_EMAIL")
DEFAULT_IGNORED_EMAILS = {
    "augusto.kronig@unimedvr.com.br",
    "elaine.f.nogueira@unimedvr.com.br",
    "vitorio.puntel@unimedvr.com.br",
    "isis.lassarote@unimedvr.com.br",
}
IGNORED_EMAILS = {
    email.strip().lower()
    for email in os.getenv("IGNORED_EMAILS", ",".join(sorted(DEFAULT_IGNORED_EMAILS))).split(",")
    if email.strip()
}
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

        issue_lines_html = "".join(
            (
                '<li style="margin-bottom: 10px;">'
                f'<a href="{escape(issue_link(entry["key"]), quote=True)}" style="color: #0b3b5b; text-decoration: none;">'
                f"{escape(entry['key'])}</a> - {escape(entry['summary'])} "
                f"– aberto por <strong>{escape(entry['reporter'])}</strong>"
                "</li>"
            )
            for entry in entries
        )
        issue_lines_text = "\n".join(
            f"• {issue_link(entry['key'])} - {entry['summary']} – aberto por {entry['reporter']}"
            for entry in entries
        )
        name = first_name(gestor)
        body = (
            f"<p>Bom dia, {escape(name)}!</p>"
            "<p>Gostaria de contar com seu apoio na validação do(s) chamado(s) abaixo, "
            "que são da sua área e, que estão há mais de 4 dias com o status "
            '"<strong>Aguardando aceite do solicitante</strong>":</p>'
            f"<ul style=\"margin: 10px 0 20px 20px; padding-left: 20px;\">{issue_lines_html}</ul>"
            "<p>Você poderia, por gentileza, verificar com o solicitante se está tudo correto com a entrega? "
            "Estando tudo de acordo, pedimos, por favor, que seja realizado o <strong>aceite do chamado</strong>, "
            "para que possamos continuar a demanda, manter nosso fluxo atualizado e evitar retrabalho.</p>"
            "<p>Desde já, agradeço muito pelo apoio! Se houver qualquer ponto a ajustar ou alguma dúvida, "
            "fico à disposição para alinharmos.</p>"
            "<p>Atenciosamente,</p>"
            "<hr style=\"border: 0; border-top: 1px solid #999; margin: 20px 0 15px;\">"
            "<p style=\"margin: 0; line-height: 1.5;\"><strong>Gabriel Fernandes E. Apratto</strong><br>"
            "Tecnologia da Informação - Unimed Volta Redonda<br>"
            "Celular (24) 9 8120 2072</p>"
            '<p><img src="cid:assinatura" alt="Unimed Volta Redonda" '
            'style="display:block; width:408px; max-width:100%; height:auto; margin-top: 15px;"></p>'
        )
        text_body = (
            f"Bom dia, {name}!\n\n"
            "Gostaria de contar com seu apoio na validação do(s) chamado(s) abaixo, "
            "que são da sua área e, que estão há mais de 4 dias com o status "
            '"Aguardando aceite do solicitante":\n\n'
            f"{issue_lines_text}\n\n"
            "Você poderia, por gentileza, verificar com o solicitante se está tudo correto com a entrega? "
            "Estando tudo de acordo, pedimos, por favor, que seja realizado o aceite do chamado, "
            "para que possamos continuar a demanda, manter nosso fluxo atualizado e evitar retrabalho.\n\n"
            "Desde já, agradeço muito pelo apoio! Se houver qualquer ponto a ajustar ou alguma dúvida, "
            "fico à disposição para alinharmos.\n\n"
            "Atenciosamente,\n\n"
            "----------------------------------------\n"
            "Gabriel Fernandes E. Apratto\n"
            "Tecnologia da Informação - Unimed Volta Redonda\n"
            "Celular (24) 9 8120 2072"
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

    if TEST_EMAIL:
        messages = [msg for msg in messages if msg["to_email"].lower() == TEST_EMAIL.lower()]
    else:
        messages = [
            msg for msg in messages if msg["to_email"].lower() not in IGNORED_EMAILS
        ]

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
