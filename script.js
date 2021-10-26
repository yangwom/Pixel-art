// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.

// O que será verificado:

//     Verifica se ao carregar a página deve ser possível pintar os pixels de preto

//     Verifica se após selecionar uma outra cor na paleta, é possível pintar os pixels com essa cor

//     Verifica se somente o pixel que foi clicado foi preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.
const pixelart = document.querySelectorAll('.pixel');
const colors = document.querySelectorAll('.color');
const colorPai = document.querySelector('#pixel-board');

for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', () => {
    for (let ii = 0; ii < colors.length; ii += 1) {
      colors[ii].classList.remove('selected');
    }

    colors[i].classList.add('selected');
  });
}

colorPai.addEventListener('click', (e) => {
  const selected = document.querySelector('.selected');
  e.target.style.backgroundColor = selected.getAttribute('value');
});

// O método getAttribute () retorna o valor do atributo com o nome especificado de um elemento.

// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

// O que será verificado:

//     Verifica se o botão tem o id denominado clear-board

//     Verifica se o botão está posicionado entre a paleta de cores e o quadro de pixels

//     Verifica se o texto do botão é 'Limpar'

//     Verifica se ao clicar no botão, o quadro de pixels é totalmente preenchido de branco

const bntLimpar = document.querySelector('#clear-board');
bntLimpar.addEventListener('click', () => {
  for (let index = 0; index < 25; index += 1) {
    pixelart[index].style.backgroundColor = 'white';
  }
});
