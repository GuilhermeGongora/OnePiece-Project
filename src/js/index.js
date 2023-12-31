const botoes = document.querySelectorAll('.botao');
//Linha 3 pega o conteúdo dos personagens
const personagens = document.querySelectorAll(".personagem");

//Usar o for each para percorrer cada item da lista de botoes
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
})
function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

