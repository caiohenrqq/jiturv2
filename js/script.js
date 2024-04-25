const botaoSetaHome = document.getElementById('botaoSetaHome');
const estadoSecao = document.getElementById('estadoSessao');

botaoSetaHome.addEventListener('click', function() {
  estadoSecao.scrollIntoView({behavior: 'smooth', block: 'start'});
})

ScrollReveal().reveal('#textoHome', { delay: 1000})
ScrollReveal().reveal('#botaoSetaHome', { delay: 2000})