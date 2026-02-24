document.getElementById("conteudo").innerHTML = "<p>Olá, mundo DOM! - innerHTML</p>";

document.getElementById("mensagem").textContent = "Texto simples, sem HTML. - textContent";

document.getElementById("foto").setAttribute("src", "spino.jpg");

let url = document.getElementById("link").getAttribute("href");
console.log(url); //https://www.youtube.com/

document.getElementById("caixa").style.backgroundColor = "lightblue"

document.getElementById("alerta").classList.add("destaque")