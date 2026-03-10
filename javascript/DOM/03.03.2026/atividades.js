// Atividade 1

let blueBotao = document.querySelector("#blueBotao"); // Botão para deixar texto Azul
let redBotao = document.querySelector("#redBotao"); // Botão para deixar texto HTML

blueBotao.addEventListener("click", function() {
    document.getElementById("titulo").style.color = "blue";   
});

redBotao.addEventListener("click", function() {
    document.getElementById("titulo").style.color = "red";   
});

//--------------------------------------------------------------------------------------------------------


// Atividade 2

let botao = document.querySelector("#botao");
let texto = document.querySelector("#texto")

botao.addEventListener("click", function() {
    if (texto.textContent === "") { // se o texto tiver mudado então:
        texto.textContent = "Texto brabo 2.0 reload pro max ultra hd"; // texto recebe texto original
    } else { // se não
        texto.textContent = ""; // altera o texto para nulo
    }
})

//--------------------------------------------------------------------------------------------------------

// Atividade 3

let input = document.querySelector("#caixaTexto"); // Input HTML
let resposta = document.querySelector("#caracteres"); // <p> HTML

caixaTexto.addEventListener("keyup", function () {
    caracteres.textContent = "Caracteres digitados: " + caixaTexto.value.length;
});

//--------------------------------------------------------------------------------------------------------

// Atividade 4

let clicker = document.querySelector("#clicker"); // Liga ao botão HTML
let clicks = document.querySelector("#clicks"); // Liga a classe <p> para mostrar a quantidade de cliques
let contador = 0; // representa a quantidade de clicks

clicker.addEventListener("click", function () {
    contador ++; // soma +1 ao contador
    clicks.textContent = "Número de clicks: " + contador; // clicks (<p>) recebe contador
});

//--------------------------------------------------------------------------------------------------------

// Atividade 5 e 6 

let item = document.querySelector("#item"); // Recebe o input do HTML
let adicionar = document.querySelector("#adicionar"); // Liga ao botão HTML

adicionar.addEventListener("click", function() {

    let novoItem = document.createElement("li"); // createElement adiciona um elemento (<p>, <ul> <li> etc) a um item
    novoItem.textContent = item.value + " - Excluir"; // novoItem recebe o conteúdo do input HTML

    novoItem.addEventListener("click", function() { // Evento criado para remover item da lista

        let confirmacao = confirm("Realmente deseja excluir este Item?"); // confirm() pergunta Sim/Não

        if (confirmacao) { // Se sim, então apaga, senão continua
            document.getElementById("lista").removeChild(novoItem);
        };

    });

    document.getElementById("lista").appendChild(novoItem);

});

//--------------------------------------------------------------------------------------------------------

// Desafio Hard

let user = document.querySelector("#user");
let botaoSubmit = document.querySelector("#submit");
let msgSucesso = document.querySelector("#sucesso");

botaoSubmit.addEventListener("click", function() {
    if (user.value.trim() !== "") { // trim() é utilizado para remover o espaço no inicio ou fim de uma frase
        msgSucesso.textContent = "Nome enviado com sucesso!"; // Exemplo trim(): " Js" -> "Js" | wo w" -> "wo w"
        msgSucesso.style.color = "green";
    }else{
        msgSucesso.textContent = "O campo nome é obrigatório!";
        msgSucesso.style.color = "red";
    }
})

//--------------------------------------------------------------------------------------------------------

// Exercício - Validação de Campos

let email = document.querySelector("#email"); // input email
let senha = document.querySelector("#senha"); // input senha
let qnt = document.querySelector("#quantidade"); // quantidade caracteres senha
let validar = document.querySelector("#validar"); // botao validar
let reportar = document.querySelector("#reportar"); // reportar erro

senha.addEventListener("keyup", function () { // Verifica se a senha é fraca ou aceitável

    if (senha.value.length < 6){ // se for menor do que 6 digitos:

        qnt.textContent = "Caracteres digitados: " + senha.value.length + " ➔ Senha fraca"; 
    }else{
        qnt.textContent = "Caracteres digitados: " + senha.value.length + " ➔ Senha aceitável";
    }
});

validar.addEventListener("click", function() { // Verificar se email contém "@" e "."

    if (email.value.includes("@") && email.value.includes(".")){ // Se tiver:
        reportar.textContent = "Email válido!";
        reportar.style.color = "green";
    }else{ // Senão:
        reportar.textContent = "Email inválido! Precisa conter '@' e '.'";
        reportar.style.color = "red";
    }
}); // Vale ressaltar que o input "@." conta como válido!

