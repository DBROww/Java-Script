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

            if (destino && destino.startsWith("#")) {

                e.preventDefault();

                conteudo.classList.remove("ativo");
                conteudo.classList.add("saindo");

                setTimeout(() => {
                    window.location.hash = destino;
                    conteudo.classList.remove("saindo");
                    conteudo.classList.add("ativo");
                }, 400);

                return;
            }
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

// ------------------------------------------------------------

const formulario = document.getElementById("formContato");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    // Regex
    const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!regexNome.test(nome)) {
        mensagem.textContent = "Digite um nome válido.";
        mensagem.style.color = "red";
        return;
    }

    if (!regexEmail.test(email)) {
        mensagem.textContent = "Digite um e-mail válido.";
        mensagem.style.color = "red";
        return;
    }

    mensagem.textContent = `Obrigado pelo contato, ${nome}! Em breve responderemos para: ${email}.`;
    mensagem.style.color = "green";

    formulario.reset();
});