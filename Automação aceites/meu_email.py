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
                f"Bom dia {name}! Tudo bem?\n\n"
                f"Poderia verificar o chamado {link}, que no momento está em {status}, "
                "e confirmar se ficou conforme o esperado?\n\n"
                "Se estiver tudo certo, pode aceitar, por favor."
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

    Preenche o campo de email com id "0", o assunto com id
    "MSG_f43ba9e2bc7_SUBJECT" e o corpo da mensagem com a classe
    "dFCbN customScrollBar dPKNh z8tsM DziEn".
    """
    def esc(s: str) -> str:
        return (
            s.replace("\\", "\\\\")
            .replace("'", "\\'")
            .replace("\r", "\\r")
            .replace("\n", "\\n")
        )

    js_lines = [
        "// Snippet gerado automaticamente. Cole no console do navegador na pÃ¡gina alvo.",
        "function findByClasses(classes){",
        "  const all = Array.from(document.querySelectorAll('input, textarea, div, [contenteditable]'));",
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
        "function clickByClasses(classes){",
        "  var css = '.' + classes.join('.');",
        "  var btn = document.querySelector(css);",
        "  if(!btn){",
        "    btn = Array.from(document.querySelectorAll('*')).find(function(el){",
        "      return classes.every(function(c){ return el.classList && el.classList.contains(c); });",
        "    });",
        "  }",
        "  if(!btn) return false;",
        "  btn.click();",
        "  return true;",
        "}",
        "function clickById(id){",
        "  var btn = document.querySelector('.fui-Button.r1f29ykk.fui-SplitButton__primaryActionButton.EOi57.___q50prb0.ffp7eso.f1p3nwhy.f11589ue.f1q5o8ev.f1pdflbu.f1phragk.f15wkkf3.f1s2uweq.fr80ssc.f1ukrpxl.fecsdlb.f1rq72xc.f1ksv2xa.fhvnf4x.fb6swo4.f1klyf7k.f232fm2.f1d6mv4x.f1nz3ub2.fag2qd2.fmvhcg7.f1o3dhpw.f14bpyus.fqc85l4.f1h3a8gf.fkiggi6.f8gmj8i.f1ap8nzx.f1igan7k.fjag8bx.f1v3eptx.f1ysmecq.faulsx.f79t15f.fbtzoaq.f8qmx7k.fd4bjan.f17t0x8g.f194v5ow.f1qgg65p.fk7jm04.fhgccpy.f32wu9k.fu5nqqq.f13prjl2.f1czftr5.f1nl83rv.fixhny3.feygou5.f1x37qnr.fn4c73s');",
        "  if(!btn) return false;",
        "  btn.click();",
        "",
        "  var dialogSelector = '.fui-DialogSurface.r1u3t6p6';",
        "  var popupButtonSelector = '.fui-Button.r1f29ykk.___dhqv000.ffp7eso.f1p3nwhy.f11589ue.f1q5o8ev.f1pdflbu.f1phragk.f15wkkf3.f1s2uweq.fr80ssc.f1ukrpxl.fecsdlb.f1rq72xc.f1ksv2xa.fhvnf4x.fb6swo4.f1klyf7k.f232fm2.f1d6mv4x.f1nz3ub2.fag2qd2.fmvhcg7.f1o3dhpw.f14bpyus.fqc85l4.f1h3a8gf.fkiggi6.f8gmj8i.f1ap8nzx.f1igan7k.fjag8bx.f1v3eptx.f1ysmecq.faulsx.f79t15f.fbtzoaq.f8qmx7k.fd4bjan.f17t0x8g.f194v5ow.f1qgg65p.fk7jm04.fhgccpy.f32wu9k.fu5nqqq.f13prjl2.f1czftr5.f1nl83rv.fixhny3.feygou5';",
        "  var popupAttempts = 20;",
        "  var popupTimer = setInterval(function(){",
        "    var dialog = document.querySelector(dialogSelector);",
        "    if(!dialog){",
        "      popupAttempts -= 1;",
        "      if(popupAttempts <= 0) clearInterval(popupTimer);",
        "      return;",
        "    }",
        "    var popupBtn = dialog.querySelector(popupButtonSelector) || document.querySelector(popupButtonSelector);",
        "    if(!popupBtn){",
        "      popupAttempts -= 1;",
        "      if(popupAttempts <= 0) clearInterval(popupTimer);",
        "      return;",
        "    }",
        "    if(document.activeElement && typeof document.activeElement.blur === 'function') document.activeElement.blur();",
        "    popupBtn.click();",
        "    clearInterval(popupTimer);",
        "  }, 200);",
        "",
        "  return true;",
        "}",
        "function clickByClassString(classString){",
        "  var css = '.' + classString.trim().split(/\\s+/).join('.');",
        "  var btn = document.querySelector(css);",
        "  if(!btn) return false;",
        "  btn.click();",
        "  return true;",
        "}",
        "function retryUntil(action, attempts, interval, done){",
        "  var left = attempts;",
        "  var timer = setInterval(function(){",
        "    var ok = false;",
        "    try { ok = !!action(); } catch (_) { ok = false; }",
        "    if(ok || left <= 1){",
        "      clearInterval(timer);",
        "      if(done) done(ok);",
        "      return;",
        "    }",
        "    left -= 1;",
        "  }, interval);",
        "}",
        "function openCompose(){",
        "  return clickByClassString('fui-Button r1f29ykk ms-Button ms-ButtonNext fui-SplitButton__primaryActionButton fECYs kXMGw ___yzc5gd0 fqrbt79 fepn2xe f1jkagg5 f1osuteh fi2ljxd f62i5r0 figsok6 f1p3nwhy f11589ue f1q5o8ev f1pdflbu f1s2uweq fr80ssc f1ukrpxl fecsdlb f8gmj8i f1ap8nzx f1igan7k fjag8bx f1h0usnq fs4ktlq f16h9ulv fx2bmrt f1r9enuy fdvt4n0 f1l34yyb f1grx941 fvu92y3 f1inhm4x f1dk6j8u foby26i fmut7hd fyp0hol f1o7mrt1 fcdmgxe fiwhxet f1aopgo3 fzbde9z f12na9cb f95gxuk f1n5876c fj41uil f1it5djm f1e0lx47 f107v6xj f1sbtcvk f12huiiw fdghr9 f15vdbe4 f1orqat1 fcep1m2 f1x37qnr fn4c73s f15wtks5 fu319zo');",
        "}",
        "// -- Fila de mensagens (processadas em loop atÃ© esgotar o mensagens.txt) --",
        "var mensagens = ["
    ]

    for m in msgs:
        to_email = esc(m['to_email'])
        subject = esc(f"Verificação do chamado {m['issue_key']}")
        message = esc(m['message'])
        js_lines.append(f"  {{ to_email: '{to_email}', subject: '{subject}', message: '{message}' }},")

    js_lines.append("];")
    js_lines.append("var mensagemIndex = 0;")
    js_lines.append("function processarProximaMensagem(){")
    js_lines.append("  if(mensagemIndex >= mensagens.length){")
    js_lines.append("    console.log('Todas as ' + mensagens.length + ' mensagens foram processadas.');")
    js_lines.append("    return;")
    js_lines.append("  }")
    js_lines.append("  var atual = mensagens[mensagemIndex];")
    js_lines.append("  retryUntil(openCompose, 20, 200, function(openOk){")
    js_lines.append("    if(!openOk) console.warn('Nao encontrou o botao de novo email');")
    js_lines.append("    setTimeout(function(){")
    js_lines.append("      var emailEl = findByClasses(['___h7sz9k0', 'fwg0e2s', 'f14t3ns0', 'f1e2ae29', 'f2hkw1w', 'fsslvku', 'f3w75mx', 'f133ih0r', 'f1jdsjjj', 'fly5x3f', 'fgr6219', 'f1ujusj6', 'f10jk5vf', 'fcgxt0o', 'f113hnb5', 'EditorClass']);")
    js_lines.append("      setByElement(emailEl, atual.to_email);")
    js_lines.append("      setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), atual.subject);")
    js_lines.append("      var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);")
    js_lines.append("      setByElement(bodyEl, atual.message);")
    js_lines.append("      // aguarda renderizaÃ§Ã£o dos botÃµes e clica em sequÃªncia")
    js_lines.append("      setTimeout(function(){")
    js_lines.append("        retryUntil(function(){ return clickByClasses(['DjFbO', 'n3MIi']); }, 20, 200, function(firstOk){")
    js_lines.append("          if(!firstOk) console.warn('Nao encontrou o botao com classes DjFbO n3MIi');")
    js_lines.append("          retryUntil(function(){ return clickById('primaryActionByClass'); }, 20, 200, function(secondOk){")
    js_lines.append("            if(!secondOk) console.warn('Nao encontrou o botao pela classe longa');")
    js_lines.append("            mensagemIndex += 1;")
    js_lines.append("            setTimeout(processarProximaMensagem, 1500);")
    js_lines.append("          });")
    js_lines.append("        });")
    js_lines.append("      }, 200);")
    js_lines.append("    }, 800);")
    js_lines.append("  });")
    js_lines.append("}")
    js_lines.append("processarProximaMensagem();")

    p = Path(out)
    p.write_text('\n'.join(js_lines), encoding='utf-8')
    return p


if __name__ == '__main__':
    # TambÃ©m gera o arquivo JS com snippets para cada mensagem
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

# selecionar um elemento da tela com espera explÃ­cita
wait = WebDriverWait(navegador, 20)
password = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, "input.form-control.ext-input.text-box.ext-text-box.show-reveal-password.ext-show-reveal-password")))

password.click()

password.send_keys('150607Ashley')

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
    
    # clicar no botÃ£o com a classe fornecida apÃ³s o redirecionamento
    ribbon_button = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, "button.fui-Button.r1f29ykk.ms-Button.ms-ButtonNext.fui-SplitButton__primaryActionButton.fECYs.kXMGw.___yzc5gd0.fqrbt79.fepn2xe.f1jkagg5.f1osuteh.fi2ljxd.f62i5r0.figsok6.f1p3nwhy.f11589ue.f1q5o8ev.f1pdflbu.f1s2uweq.fr80ssc.f1ukrpxl.fecsdlb.f8gmj8i.f1ap8nzx.f1igan7k.fjag8bx.f1h0usnq.fs4ktlq.f16h9ulv.fx2bmrt.f1r9enuy.fdvt4n0.f1l34yyb.f1grx941.fvu92y3.f1inhm4x.f1dk6j8u.foby26i.fmut7hd.fyp0hol.f1o7mrt1.fcdmgxe.fiwhxet.f1aopgo3.fzbde9z.f12na9cb.f95gxuk.f1n5876c.fj41uil.f1it5djm.f1e0lx47.f107v6xj.f1sbtcvk.f12huiiw.fdghr9.f15vdbe4.f1orqat1.fcep1m2.f1x37qnr.fn4c73s.f15wtks5.fu319zo")))
    ribbon_button.click()
    print('Cliquei no botÃ£o Ribbon-588 pela classe.')
except Exception:
    print('NÃ£o conseguiu redirecionar para o Outlook dentro do tempo ou o botÃ£o nÃ£o foi encontrado.')

# manter o navegador aberto para inspecionar o resultado
time.sleep(200)


