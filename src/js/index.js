const botoes = document.querySelectorAll('.botao');

const temporadas = document.querySelectorAll('.temporada');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desselecionarBotao();

        botao.classList.add('selecionado');

        desselecionarTemporada();

        temporadas[indice].classList.add('selecionado');
    });
});

function desselecionarTemporada() {
    const temporadaSelecionado = document.querySelector('.temporada.selecionado');
    temporadaSelecionado.classList.remove('selecionado');
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

