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

const urlEstados = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

var selectEstados = document.getElementById('campoEstados');
var option;

fetch(urlEstados)
  .then((res) => {
    if (!res.ok) {
      throw new Error ('Erro ao obter os dados da API dos estados.')
    }

    return res.json();
  })
    .then((data => {
      let i = 0;
      data.forEach((estado) => {
        option = document.createElement('option');
        option.textContent = estado.nome;
        option.setAttribute('data-sigla', estado.sigla);
        selectEstados.appendChild(option);

        // Logs
        console.log(estado.nome + ',', estado.sigla + '.')
        
        i++
      });
      console.log(i + ' estados encontrados.')
    }))
    .catch((error) => {
      console.error('Ocorreu um erro ao buscar os dados:', error);
    })