let input = document.querySelectorAll("input"); // seleciona todos os inputs
let span = document.querySelectorAll(".msgSpan"); // seleciona todos os spans

let inputNome = document.querySelector("#inputNome"); // input Nome
let msgNome = document.querySelector("#msgNome"); // reportar erro do Nome

let inputEmail = document.querySelector("#inputEmail"); // input Email
let msgEmail = document.querySelector("#msgEmail"); // reporta erro do Email

let inputSenha = document.querySelector("#inputSenha"); // input Senha
let msgSenha = document.querySelector("#msgSenha"); // reporta a força da Senha

let confirmaSenha = document.querySelector("#confirmarSenha") // input confirma senha
let msgConfirm = document.querySelector("#msgConfirm") // reportar erro 

let inputTelefone = document.querySelector("#inputTelefone") // input Telefone
let msgTelefone = document.querySelector("#msgTelefone"); // reporta erro no Telefone

let lista = document.querySelector("#lista");

let inputCEP = document.querySelector("#inputCEP") // input CEP
let msgCEP = document.querySelector("#msgCEP"); // reporta erro no CEP

//------------------------------------------------------------------------------------------------------------------------------------------------

// Função para verificar se o Nome é válido
function validarNome(nome) {
    const padraoNome = /^[A-Za-zÀ-ÿ\s]+$/; // REGEX para validar nome
    return padraoNome.test(nome);
}

//------------------------------------------------------------------------------------------------------------------------------------------------

// Função para verificar se o Email é válido
function validarEmail(email) {
    const padraoEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // REGEX para validar email
    return padraoEmail.test(email);
}

//------------------------------------------------------------------------------------------------------------------------------------------------

// Função para verificar nível de força da senha
function validarSenha(senha) {
    const senhaForte = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#/]{8,}$/ // REGEX para validar senha
    return senhaForte.test(senha);
}

//------------------------------------------------------------------------------------------------------------------------------------------------

//função para validar Telefone
function validarTelefone(telefone) {
    const padraoTelefone = /^(?:\+)[0-9]{2}\s?(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/ // REGEX para validar telefone
    return padraoTelefone.test(telefone);
}

//------------------------------------------------------------------------------------------------------------------------------------------------

//função validar CEP
function validarCEP(cep) {
    const padraoCEP = /^\d{5}-?\d{3}$/ // REGEX para validar CEP
    return padraoCEP.test(cep);
}

//------------------------------------------------------------------------------------------------------------------------------------------------

// Exibe/Oculta a senha
let mostrarSenha = document.querySelector("#mostrarSenha"); // refere-se ao icone do olho para exibir a senha

mostrarSenha.addEventListener("click", function () { // Evento ao clicar no icone olho para exibir a senha
    if (inputSenha.type === "password") { // se o input for do tipo senha
        inputSenha.setAttribute('type', 'text'); // input troca de atributo, de senha para texto
        mostrarSenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill'); // substitui o olho aberto para o fechado
    } else {
        inputSenha.setAttribute('type', 'password'); // se o input for do tipo texto então ele vira do tipo senha
        mostrarSenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill'); // o olho volta a ficar aberto
    }
});

//------------------------------------------------------------------------------------------------------------------------------------------------

// Seleção de input azul
input.forEach(i => i.required = true);// Faz o input ser obrigatorio

input.forEach(function (input) { // Para cada input

    input.addEventListener("focus", function () { // Ao clicar deixa a borda azul
        input.style.border = "2px solid blue";
    });

    input.addEventListener("blur", function () { // Ao sair a borda volta ao normal 
        input.style.border = "none";
        span.textContent = " "
    });

});

//------------------------------------------------------------------------------------------------------------------------------------------------
// Validando Nome

inputNome.addEventListener("input", function () {

    if (inputNome.value === "") { // Se estiver vazio não aplica erro
        inputNome.style.border = "2px solid blue";
        msgNome.textContent = ""
    }
    else if (!validarNome(inputNome.value)) { // aplica a função validarNome(nome)
        inputNome.style.border = "2px solid red";
        msgNome.textContent = "Deve conter apenas letras e acentos";
        msgNome.style.color = "red";
    }

    else {
        inputNome.style.border = "2px solid blue";
        msgNome.textContent = "";
    }

});

//------------------------------------------------------------------------------------------------------------------------------------------------
// Validando Email

inputEmail.addEventListener("input", function () {

    if (inputEmail.value === "") { // Se estiver vazio não apresenta erro
        inputEmail.style.border = "2px solid blue";
        msgEmail.textContent = ""
    }
    else if (!validarEmail(inputEmail.value)) { // aplica a função validarEmail(email)
        inputEmail.style.border = "2px solid red";
        msgEmail.textContent = "Digite um Email válido!";
        msgEmail.style.color = "red";
    }
    else {
        inputEmail.style.border = "2px solid blue";
        msgEmail.textContent = ""
    }

})

//------------------------------------------------------------------------------------------------------------------------------------------------
// Validando Senha

inputSenha.addEventListener("input", function () {

    if (inputSenha.value === "") { // Se estiver vazio não apresenta erro
        inputSenha.style.border = "2px solid blue";
        msgSenha.textContent = ""
    }
    else if (!validarSenha(inputSenha.value)) { // aplica a função validarSenha(senha)
        inputSenha.style.border = "2px solid red";
        msgSenha.innerHTML = "Mín. 8 caracteres com maiúscula, minúscula, número e símbolo.";
        msgSenha.style.color = "red";
    }
    else {
        inputSenha.style.border = "2px solid blue";
        msgSenha.textContent = ""
    }

})

// Confirmando Senha

confirmaSenha.addEventListener("input", function () {
    if (confirmaSenha.value === "") { // Se estiver vazio não apresenta erro
        confirmaSenha.style.border = "2px solid blue";
        msgConfirm.textContent = ""
    }
    else if (confirmaSenha.value !== inputSenha.value) {
        confirmaSenha.style.border = "2px solid red";
        msgConfirm.innerHTML = "A senha deve ser a mesma que a anterior!";
        msgConfirm.style.color = "red";
    }
    else {
        confirmaSenha.style.border = "2px solid blue";
        msgConfirm.textContent = ""
    }
})

//------------------------------------------------------------------------------------------------------------------------------------------------
// Validando CEP

inputCEP.addEventListener("input", function () {

    if (inputCEP.value === "") { // Se estiver vazio não apresenta erro
        inputCEP.style.border = "2px solid blue";
        msgCEP.textContent = ""
    }
    else if (!validarCEP(inputCEP.value)) { // aplica a função validarCEPl(cep)
        inputCEP.style.border = "2px solid red";
        msgCEP.textContent = "Digite um CEP válido!";
        msgCEP.style.color = "red";
    }
    else {
        inputCEP.style.border = "2px solid blue";
        msgCEP.textContent = ""
    }

})

//------------------------------------------------------------------------------------------------------------------------------------------------
// Validando Telefone

inputTelefone.addEventListener("input", function () {

    if (inputTelefone.value === "") { // Se estiver vazio não apresenta erro
        inputTelefone.style.border = "2px solid blue";
        msgTelefone.textContent = ""
    }
    else if (!validarTelefone(inputTelefone.value)) { // aplica a função validarEmail(email)
        inputTelefone.style.border = "2px solid red";
        msgTelefone.textContent = "Digite um Telefone válido conforme o esboço!";
        msgTelefone.style.color = "red";
    }
    else {
        inputTelefone.style.border = "2px solid blue";
        msgTelefone.textContent = ""
    }

})

// Acrescentando mais Telefones

let plus = document.querySelector("#plus");

plus.addEventListener('click', function () {
    let novoTelefone = document.createElement("li");
    let inputNovo = document.createElement("input");
    let remove = document.createElement("i");
    let erro = document.createElement("span"); // <-- span de erro

    inputNovo.type = "text";
    inputNovo.placeholder = "Digite outro telefone";
    inputNovo.classList.add("input");

    erro.textContent = ""; // mensagem inicial vazia
    erro.classList.add("erro"); // classe para estilizar (ex: vermelho)

    remove.classList.add("bi", "bi-x-circle", "excluir-icon");

    novoTelefone.appendChild(inputNovo);
    novoTelefone.appendChild(erro); // <-- adiciona abaixo do input
    novoTelefone.appendChild(remove);

    lista.appendChild(novoTelefone);

    // Evento para remover
    remove.addEventListener('click', function () {
        lista.removeChild(novoTelefone);
    });
});

// Validação do telefone dinâmico
inputNovo.addEventListener("input", function () {

    if (inputNovo.value === "") {
        inputNovo.style.border = "2px solid blue";
        erro.textContent = "";
    }
    else if (!validarTelefone(inputNovo.value)) {
        inputNovo.style.border = "2px solid red";
        erro.textContent = "Telefone inválido!";
        erro.style.color = "red";
    }
    else {
        inputNovo.style.border = "2px solid blue";
        erro.textContent = "";
    }

});