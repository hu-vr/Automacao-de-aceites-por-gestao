from API_jira import get_relatorio
from pathlib import Path


def first_name(full_name: str) -> str:
    parts = full_name.strip().split()
    return parts[0].capitalize() if parts else full_name


def issue_link(key: str) -> str:
    return f"https://unimedvr.atlassian.net/servicedesk/customer/portal/3/{key}"


def generate_messages(data):
    msgs = []
    for reporter, entries in data['relators'].items():
        name = first_name(reporter)
        for e in entries:
            link = issue_link(e['key'])
            status = e.get('status', '')
            msg = (
                f"Bom dia {name}! Tudo bem? "
                f"Poderia verificar o chamado [{link}]({link}), que no momento está em {status} "
                "e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor."
            )
            msgs.append({
                'to_name': reporter,
                'to_email': data['emails'].get(reporter, 'N/A'),
                'issue_key': e['key'],
                'message': msg
            })
    return msgs


def save_messages(msgs, path: str | Path = 'mensagens.txt'):
    p = Path(path)
    with p.open('w', encoding='utf-8') as f:
        for m in msgs:
            f.write(f"Para: {m['to_name']} <{m['to_email']}>\n")
            f.write(f"Assunto: Verificação do chamado {m['issue_key']}\n")
            f.write(m['message'] + "\n")
            f.write("-" * 60 + "\n")
    return p


if __name__ == '__main__':
    data = get_relatorio()
    messages = generate_messages(data)
    out = save_messages(messages)
    print(f"Mensagens geradas: {len(messages)} -> {out}")


def generate_js_snippets(msgs, out: str | Path = 'fill_snippets.js'):
    """Gera snippets JS para colar no console do navegador.

    Preenche o campo de email com id "1", o campo de mensagem com id
    "MSG_3608ef1b21c_SUBJECT" e clica no botão com a classe
    "splitButton-rf2__primaryActionButton".
    """
    def esc(s: str) -> str:
        return s.replace("\\", "\\\\").replace("'", "\\'")

    js_lines = [
        "// Snippet gerado automaticamente. Cole no console do navegador na página alvo.",
        "function findByClasses(classes){",
        "  const all = Array.from(document.querySelectorAll('input, textarea, [contenteditable]'));",
        "  return all.find(el => classes.every(c => (el.className || '').split(/\\s+/).includes(c)));",
        "}",
        "function setByElement(el, val){",
        "  if(!el) return false;",
        "  if('value' in el) el.value = val; else el.innerText = val;",
        "  el.dispatchEvent(new Event('input', {bubbles:true}));",
        "  el.dispatchEvent(new Event('change', {bubbles:true}));",
        "  return true;",
        "}",
        "function setById(id, val){",
        "  var el = document.getElementById(id);",
        "  if(!el) return false;",
        "  if('value' in el) el.value = val; else el.innerText = val;",
        "  el.dispatchEvent(new Event('input', {bubbles:true}));",
        "  el.dispatchEvent(new Event('change', {bubbles:true}));",
        "  return true;",
        "}",
        "function clickByClass(cls){",
        "  var btn = document.querySelector('.' + cls);",
        "  if(!btn) return false;",
        "  btn.click();",
        "  return true;",
        "}",
        "// -- Per-mensagem --"
    ]

    for m in msgs:
        to_email = esc(m['to_email'])
        message = esc(m['message'])
        # classes para localizar o campo de email conforme solicitado pelo usuário
        email_class_list = [
            '___h7sz9k0','fwg0e2s','f14t3ns0','f1e2ae29','f2hkw1w','fsslvku','f3w75mx',
            'f133ih0r','f1jdsjjj','fly5x3f','fgr6219','f1ujusj6','f10jk5vf','fcgxt0o',
            'f113hnb5','EditorClass','g7toD'
        ]
        js_lines.append("(function(){")
        js_lines.append(f"  var emailEl = findByClasses({email_class_list});")
        js_lines.append(f"  setByElement(emailEl, '{to_email}');")
        js_lines.append(f"  setById('MSG_3608ef1b21c_SUBJECT', '{message}');")
        js_lines.append("  // aguarda 200ms e clica no botão de enviar")
        js_lines.append("  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);")
        js_lines.append("})();")
        js_lines.append("")
    p = Path(out)
    p.write_text('\n'.join(js_lines), encoding='utf-8')
    return p


if __name__ == '__main__':
    # Também gera o arquivo JS com snippets para cada mensagem
    data = get_relatorio()
    messages = generate_messages(data)
    js_out = generate_js_snippets(messages)
    print(f"Snippets JS gerados: {js_out}")
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# abrir o navegador
navegador = webdriver.Chrome()

#acessando um site
navegador.get("https://outlook.office.com/mail/?culture=pt-br&country=br&login_hint=O.CiQ5ZTAwYTgxZC00NzQ4LTQ2YTctOWE2ZC1kZWEwNTkwMjUzZWISJDBhMTkxNDJjLWU4YWEtNDQ1ZS1hMTJhLTgwMzlkYTJmZmI2MRofZ2FicmllbC5hcHJhdHRvQHVuaW1lZHZyLmNvbS5iciA6")

#tela cheia
navegador.maximize_window()

# selecionar um elemento da tela com espera explícita
wait = WebDriverWait(navegador, 20)
password = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, "input.form-control.ext-input.text-box.ext-text-box.show-reveal-password.ext-show-reveal-password")))

password.click()

password.send_keys('15464224718Cpf.')

submit_button = wait.until(EC.element_to_be_clickable((By.ID, "idSIButton9")))
submit_button.click()

try:
    stay_signed_button = WebDriverWait(navegador, 8).until(
        EC.element_to_be_clickable((By.ID, "idSIButton9"))
    )
    stay_signed_button.click()
except Exception:
    pass

try:
    WebDriverWait(navegador, 30).until(EC.url_contains("outlook.office.com/mail"))
    print('Redirecionado para:', navegador.current_url)
    
    # clicar no botão com a classe fornecida após o redirecionamento
    ribbon_button = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button.fui-Button.r1f29ykk.ms-Button.ms-ButtonNext.fui-SplitButton__primaryActionButton.fECYs.kXMGw.___yzc5gd0.fqrbt79.fepn2xe.f1jkagg5.f1osuteh.fi2ljxd.f62i5r0.figsok6.f1p3nwhy.f11589ue.f1q5o8ev.f1pdflbu.f1s2uweq.fr80ssc.f1ukrpxl.fecsdlb.f8gmj8i.f1ap8nzx.f1igan7k.fjag8bx.f1h0usnq.fs4ktlq.f16h9ulv.fx2bmrt.f1r9enuy.fdvt4n0.f1l34yyb.f1grx941.fvu92y3.f1inhm4x.f1dk6j8u.foby26i.fmut7hd.fyp0hol.f1o7mrt1.fcdmgxe.fiwhxet.f1aopgo3.fzbde9z.f12na9cb.f95gxuk.f1n5876c.fj41uil.f1it5djm.f1e0lx47.f107v6xj.f1sbtcvk.f12huiiw.fdghr9.f15vdbe4.f1orqat1.fcep1m2.f1x37qnr.fn4c73s.f15wtks5.fu319zo")))
    ribbon_button.click()
    print('Cliquei no botão Ribbon-588 pela classe.')
except Exception:
    print('Não conseguiu redirecionar para o Outlook dentro do tempo ou o botão não foi encontrado.')

# manter o navegador aberto para inspecionar o resultado
time.sleep(100)