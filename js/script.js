const botaoSetaHome = document.getElementById('botaoSetaHome');
const estadoSessao = document.getElementById('estadoSessao');

botaoSetaHome.addEventListener('click', function() {
  estadoSessao.scrollIntoView({behavior: 'smooth', block: 'start'});
})

ScrollReveal().reveal('#textoHome', { delay: 1000})
ScrollReveal().reveal('#botaoSetaHome', { delay: 2000})

window.onbeforeunload = function() {
  window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', function() {
  AOS.init();
});
