
// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.

// O que será verificado:

//     Verifica se ao carregar a página deve ser possível pintar os pixels de preto

//     Verifica se após selecionar uma outra cor na paleta, é possível pintar os pixels com essa cor

//     Verifica se somente o pixel que foi clicado foi preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.
let pixelart = document.querySelectorAll('.pixel')
let colors = document.querySelectorAll('.color')
let colorPai = document.querySelector('#pixel-board')

for (let i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', function (e) {
        for (let i = 0; i < colors.length; i++) {
            colors[i].classList.remove('selected')
        }

        colors[i].classList.add('selected')

    });
}


colorPai.addEventListener('click', function (e) {
    let selected = document.querySelector('.selected');
    e.target.style.backgroundColor = selected.getAttribute('value');
});

//O método getAttribute () retorna o valor do atributo com o nome especificado de um elemento.

// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

// O que será verificado:

//     Verifica se o botão tem o id denominado clear-board

//     Verifica se o botão está posicionado entre a paleta de cores e o quadro de pixels

//     Verifica se o texto do botão é 'Limpar'

//     Verifica se ao clicar no botão, o quadro de pixels é totalmente preenchido de branco










