
let botao = document.querySelector("#botao");
let texto = document.querySelector(".texto");

// guarda o texto original
let textoOriginal = texto.textContent;

botao.addEventListener("click", function() { 
    if (texto.textContent === "Texto alterado após o clique!") { // se o texto tiver mudado então:
        texto.textContent = textoOriginal; // texto recebe texto original
    } else { // se não
        texto.textContent = "Texto alterado após o clique!"; // altera o texto
    }
});

//-----------------------------------------------------------------------------------------

let input = document.querySelector("#nome");
let resposta = document.querySelector("#resposta");

input.addEventListener("keyup", function () {
    resposta.textContent = input.value;
});