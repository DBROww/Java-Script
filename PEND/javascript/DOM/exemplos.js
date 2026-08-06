document.getElementById("conteudo").innerHTML = "<p>Olá, mundo DOM! - innerHTML</p>";

document.getElementById("mensagem").textContent = "Texto simples, sem HTML. - textContent";

document.getElementById("foto").setAttribute("src", "spino.jpg");

let url = document.getElementById("link").getAttribute("href");
console.log(url); //https://www.youtube.com/

document.getElementById("caixa").style.backgroundColor = "lightblue";

document.getElementById("alerta").classList.add("destaque");

document.getElementById("alerta").classList.remove("oculto");

// {
let novoParagrafo = document.createElement("p");

novoParagrafo.textContent = "Este elemento foi criado pelo JavaScript.";

document.getElementById("container").appendChild(novoParagrafo); //appendChild adiciona um elemento como filho de outro ja existente
// }

// {
let novoItem = document.createElement("li"); // createElement adiciona um elemento (<p>, <ul> <li> etc) a um item
novoItem.textContent = "Item novo";
document.getElementById("lista").appendChild(novoItem);
// }

// --
let item = document.getElementById("item1");
document.getElementById("lista").removeChild(item) // remove o filho de id "item1" do pai de id "lista"
//--