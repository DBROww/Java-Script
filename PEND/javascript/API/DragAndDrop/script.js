const produto = document.querySelector("#produto");
const carrinho = document.querySelector("#carrinho");

// Event = objeto fornecido pelo navegador que tem informações sobre o evento que aconteceu
// dataTransfer = objeto para armazenar e transportar dados durante a operação de arrastar e soltar
produto.addEventListener("dragstart", function(event){
    event.dataTransfer.setData("text", event.target.id);
});

// Mudar o padrão
carrinho.addEventListener("dragover", function (event) {
    event.preventDefault();
    console.log("Pode soltar aqui no carrinho...");
});

// Soltar
carrinho.addEventListener("drop", function (event) {
    event.preventDefault();

    const id = event.dataTransfer.getData('text');
    const elemento = document.querySelector("#" + id);

    // A div do produto passa a ser filho da div carrinho
    carrinho.appendChild(elemento);
});
