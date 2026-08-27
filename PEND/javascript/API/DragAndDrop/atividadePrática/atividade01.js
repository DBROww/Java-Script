const bola = document.querySelector("#bola");
const cesta = document.querySelector("#cesta");
const fimJogo = document.querySelector("#fimJogo");
const pontuacaoFinal = document.querySelector("#pontuacaoFinal");
const jogarNovamente = document.querySelector("#jogarNovamente");

const pontosElemento = document.querySelector("#pontos");
const tempoElemento = document.querySelector("#tempo");

// Variaveis do jogo
let pontos = 0;
let tempo = 30;

let jogoAtivo = true;
let jogoIniciado = false;
let cronometro;

// Posicao aleatoria dentro do Main
function PosicaoAleatoria(elemento) {

    const main = document.querySelector("main");

    const larguraMain = main.clientWidth;
    const alturaMain = main.clientHeight;

    const larguraElemento = elemento.offsetWidth;
    const alturaElemento = elemento.offsetHeight;


    const x = Math.random() * (larguraMain - larguraElemento);

    const y = Math.random() * (alturaMain - alturaElemento);

    return {
        x: x,
        y: y
    };
}

// Impedri que a bola e a cesta fique no mesmo espaço
function posicionarElementos() {

    let posicaoBola;
    let posicaoCesta;

    const distanciaMinima = 220;

    do {
        posicaoBola = PosicaoAleatoria(bola);

        posicaoCesta = PosicaoAleatoria(cesta);

        // Centro da bola
        const centroBolaX = posicaoBola.x + bola.offsetWidth / 2;
        const centroBolaY = posicaoBola.y + bola.offsetHeight / 2;

        // Centro da cesta
        const centroCestaX = posicaoCesta.x + cesta.offsetWidth / 2;
        const centroCestaY = posicaoCesta.y + cesta.offsetHeight / 2;


        // Calcula a distância
        const distancia = Math.sqrt(
            Math.pow(centroBolaX - centroCestaX, 2) + Math.pow(centroBolaY - centroCestaY, 2)
        );

        // Se estiverem longe o suficiente, adimite a posição
        if (distancia >= distanciaMinima) {
            break; // Encerra 
        }

    } while (true);

    // Define a posição da bola e da cesta no CSS através de left e top
    bola.style.left = posicaoBola.x + "px";
    bola.style.top = posicaoBola.y + "px";

    cesta.style.left = posicaoCesta.x + "px";
    cesta.style.top = posicaoCesta.y + "px";
}

// Posiciona os elementos ao abrir a pagina 
posicionarElementos();

// Quando a primeira bola for segurada inicia o tempo
bola.addEventListener("dragstart", function (event) {

    // Se o jogo acabou, não permite arrastar
    if (!jogoAtivo) {
        event.preventDefault();
        return;
    }

    // Inicia o cronômetro somente quando segurar a bola pela primeira vez
    if (!jogoIniciado) {
        jogoIniciado = true;
        iniciarCronometro();
    }

    event.dataTransfer.setData("text/plain", "bola");
});

// Permite arrastar a bola na cesta
cesta.addEventListener("dragover", function (event) {
    if (!jogoAtivo) {
        return;
    }

    event.preventDefault();
});

// Quando soltar a bola na cesta pontua e altera a posicao
cesta.addEventListener("drop", function (event) {

    // Se o tempo acabar reseta
    if (!jogoAtivo) {
        return;
    }

    event.preventDefault();

    const dados = event.dataTransfer.getData("text/plain");

    if (dados === "bola") {
        // Adiciona 1 ponto
        pontos++;

        // Atualiza o número de pontos no header
        pontosElemento.textContent = pontos;

        // Após pontuar gera um delay de 300ms para uma nova posição aleatória
        setTimeout(function () {

            if (jogoAtivo) {
                posicionarElementos();
            }
        }, 300);
    }
});

// Relógio
function iniciarCronometro() {

    cronometro = setInterval(function () {

        tempo--; // Vai diminuindo em 1 o tempo

        // Atualiza o tempo no header
        tempoElemento.textContent = tempo;

        // Quando chegar a zero
        if (tempo <= 0) {
            clearInterval(cronometro);
            jogoAtivo = false;

            // Impede a bola de ser arrastada
            bola.setAttribute("draggable", "false");


            // Mostra a pontuação final
            pontuacaoFinal.textContent = pontos;

            // Exibe a tela de fim de jogo
            fimJogo.style.display = "flex";
        }

    }, 1000);
}

jogarNovamente.addEventListener("click", function () {

    // Reseta os pontos
    pontos = 0;
    pontosElemento.textContent = pontos;

    // Reseta o tempo
    tempo = 30;
    tempoElemento.textContent = tempo;


    // Reativa o jogo
    jogoAtivo = true;
    jogoIniciado = false;

    // Permite arrastar a bola novamente
    bola.setAttribute("draggable", "true");

    // Esconde a tela de fim de jogo
    fimJogo.style.display = "none";

    // Coloca bola e cesta em novas posições
    posicionarElementos();
});