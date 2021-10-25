let corSelecionada1 = document.querySelector('.black')
let corSelecionada2 = document.querySelector('.green')
let corSelecionada3 = document.querySelector('.blue')
let corSelecionada4 = document.querySelector('.orange')
let selected = document.querySelector('.selected')
corSelecionada1.addEventListener('click', (e) => {
    if (corSelecionada1.classList[2] !== 'selected') {
        corSelecionada1.className += ' selected'
        corSelecionada2.className = 'color green'
        corSelecionada3.className = 'color blue'
        corSelecionada4.className = 'color orange'

    }


});

corSelecionada2.addEventListener('click', (e) => {
    if(corSelecionada2.classList[2] !== 'selected') {
corSelecionada1.className = 'color black'
    corSelecionada2.className += ' selected'
    corSelecionada3.className = 'color blue'
    corSelecionada4.className = 'color orange'
    }
    
});

corSelecionada3.addEventListener('click', (e) => {
    if(corSelecionada3.classList[2] !== 'selected') {
        corSelecionada1.className = 'color black'
            corSelecionada2.className = 'color green'
            corSelecionada3.className += ' selected'
            corSelecionada4.className = 'color orange'
            }

});

corSelecionada4.addEventListener('click', (e) => {
e.target
if(corSelecionada4.classList[2] !== 'selected') {
    corSelecionada1.className = 'color black'
        corSelecionada2.className = 'color green'
        corSelecionada3.className = 'color blue'
        corSelecionada4.className += ' selected'
    }

});
