// Snippet gerado automaticamente. Cole no console do navegador na página alvo.
function findByClasses(classes){
  const all = Array.from(document.querySelectorAll('input, textarea, div, [contenteditable]'));
  return all.find(el => classes.every(c => (el.className || '').split(/\s+/).includes(c)));
}
function setByElement(el, val){
  if(!el) return false;
  if('value' in el) el.value = val; else el.innerText = val;
  el.dispatchEvent(new Event('input', {bubbles:true}));
  el.dispatchEvent(new Event('change', {bubbles:true}));
  return true;
}
function setById(id, val){
  var el = document.getElementById(id);
  if(!el) return false;
  if('value' in el) el.value = val; else el.innerText = val;
  el.dispatchEvent(new Event('input', {bubbles:true}));
  el.dispatchEvent(new Event('change', {bubbles:true}));
  return true;
}
function clickByClass(cls){
  var btn = document.querySelector('.' + cls);
  if(!btn) return false;
  btn.click();
  return true;
}
// -- Per-mensagem --
(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'valesca.campos@unimedvr.onmicrosoft.com');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-63994');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Valesca! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63994](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63994), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'thiago.dias@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64145');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Thiago! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64145](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64145), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'thiago.pecora@unimedvrlitoral.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-62672');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Thiago! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-62672](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-62672), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'telma.rodrigues@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64374');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Telma! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64374](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64374), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'telma.rodrigues@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64317');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Telma! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64317](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64317), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'sumara.oliveira@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-60217');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Sumara! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-60217](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-60217), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'silvio.cantamesse@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64331');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Silvio! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64331](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64331), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'silvio.cantamesse@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-63903');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Silvio! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63903](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63903), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'rosemiro.barbosa@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-62777');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Rosemiro! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-62777](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-62777), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'rosemiro.barbosa@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-46509');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Rosemiro! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-46509](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-46509), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'renata.s.ferreira@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-63983');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Renata! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63983](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63983), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'rayane.silva@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64335');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Rayane! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64335](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64335), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'priscila.cruzeiro@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-63027');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Priscila! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63027](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63027), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'olavo.gomes@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64106');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Olavo! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64106](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64106), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'melissa.santos@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64245');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Melissa! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64245](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64245), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'maria.almeida@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64029');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Maria! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64029](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64029), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'marianna.costa@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-62696');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Marianna! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-62696](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-62696), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'mariangela.benedito@unimedvrlitoral.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-63539');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Mariangela! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63539](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63539), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'mariana.f.freitas@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64222');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Mariana! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64222](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64222), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'maria.sa@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64315');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Maria! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64315](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64315), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'maria.graziele@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-63907');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Maria! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63907](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63907), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'lucimar.guimaraes@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-907');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Lucimar! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-907](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-907), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'luciana.correa@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64210');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Luciana! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64210](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64210), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'lidiane.cruz@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64206');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Lidiane! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64206](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64206), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'leonardo.fernandes@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64163');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Leonardo! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64163](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64163), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'laryssa.gomes@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-63968');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Laryssa! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63968](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63968), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'laryssa.gomes@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-63967');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Laryssa! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63967](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63967), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'laryssa.gomes@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-57035');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Laryssa! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-57035](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-57035), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'kamila.reis@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64197');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Kamila! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64197](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64197), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'joelza.frauches@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-63443');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Joelza! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63443](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63443), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'jessica.o.lima@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64316');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Jessica! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64316](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64316), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'jaqueline.alves@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-53378');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Jaqueline! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-53378](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-53378), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'ithalo.dias@unimedvrlitoral.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-62603');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Ithalo! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-62603](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-62603), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'isabele.alves@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64207');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Isabele! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64207](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64207), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'isabele.alves@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-63421');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Isabele! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63421](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63421), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'graciele.alves@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64179');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Graciele! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64179](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64179), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'gabriela.alves@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-63740');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Gabriela! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63740](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63740), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'fabio.silveira@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64277');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Fabio! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64277](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64277), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'fabio.silveira@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-63777');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Fabio! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63777](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63777), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'edileia.oliveira@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64196');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Edileia! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64196](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64196), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'danilo.nascimento@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-62178');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Danilo! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-62178](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-62178), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'danieli.queiroz@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-63955');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Danieli! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63955](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63955), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'cristiano.assuncao@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-60045');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Cristiano! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-60045](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-60045), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'caroline.vanco@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-58340');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Caroline! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-58340](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-58340), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'camila.parreira@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-63567');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Camila! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63567](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-63567), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'bruno.furtado@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-60268');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Bruno! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-60268](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-60268), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'anine.assis@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64369');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Anine! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64369](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64369), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'andreia.figueira@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64023');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Andreia! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64023](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64023), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'ana.p.rodrigues@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64178');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Ana! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64178](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64178), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();

(function(){
  var emailEl = document.getElementById('0');
  setByElement(emailEl, 'ana.caroline@unimedvr.com.br');
  setByElement(document.getElementById('MSG_f43ba9e2bc7_SUBJECT'), 'Verificação do chamado PDS-64096');
  var bodyEl = findByClasses(['dFCbN', 'customScrollBar', 'dPKNh', 'z8tsM', 'DziEn']);
  setByElement(bodyEl, 'Bom dia Ana! Tudo bem? Poderia verificar o chamado [https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64096](https://unimedvr.atlassian.net/servicedesk/customer/portal/3/PDS-64096), que no momento está em Aceite do Solicitante e confirmar lá se ficou conforme o esperado? Se tiver tudo certo, pode aceitar, por favor.');
  // aguarda 200ms e clica no botão de enviar
  setTimeout(function(){ clickByClass('splitButton-rf2__primaryActionButton'); }, 200);
})();
