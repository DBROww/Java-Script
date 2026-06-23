function relogio() {
    const agora = new Date();

    // Formatando a Data (Ex: Terça-feira, 16 de junho de 2026)
    const opcoesData = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dataFormatada = agora.toLocaleDateString('pt-BR', opcoesData);

    // Formatando a Hora (Ex: 15:08:30)
    const horaFormatada = agora.toLocaleTimeString('pt-BR');

    // Exibindo no HTML
    document.getElementById('data-relogio').textContent = dataFormatada;
    document.getElementById('tempo-relogio').textContent = horaFormatada;
}

// Atualiza a cada 1000 milissegundos (1 segundo)
setInterval(relogio, 1000);

relogio();

// --------------------------------------------------

let ultimaPosicaoScroll = window.scrollY;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const posicaoScrollAtual = window.scrollY;

    // Evita o efeito elástico no topo em telas iOS
    if (posicaoScrollAtual < 0) return;

    if (posicaoScrollAtual > ultimaPosicaoScroll) {
        // Rolou para baixo -> adiciona a classe que esconde
        header.classList.add('escondido');
    } else {
        // Rolou para cima -> remove a classe e o header aparece
        header.classList.remove('escondido');
    }

    // Atualiza a última posição salva
    ultimaPosicaoScroll = posicaoScrollAtual;
});

// ------------------------------- Efeito de carregamento do conteúdo ao trocar de paginas HTML

// Quando o html terminar de carregar
document.addEventListener("DOMContentLoaded", () => {

    // Seleciona o main
    const conteudo = document.querySelector(".conteudo");

    // Animação de entrada
    setTimeout(() => {
        conteudo.classList.add("ativo"); // Adiciona a classe .ativo no main
    }, 50);

    // Animação de saída
    document.querySelectorAll("a").forEach(link => {

        // Para cada link clicado
        link.addEventListener("click", function (e) {

            // Define o link clicado como destino
            const destino = this.getAttribute("href");

            // Verifica se o link é uma página interna bloqueia sistes externos
            if (
                destino &&
                !destino.startsWith("#") &&
                !destino.startsWith("http")
            ) {

                e.preventDefault(); // Obriga o site a executar a animação antes de abrir a página completamente

                conteudo.classList.remove("ativo"); // Remove a classe ativo
                conteudo.classList.add("saindo"); // Adiciona a classe saindo

                setTimeout(() => {
                    window.location.href = destino;
                }, 400);
            }
        });

    });

});