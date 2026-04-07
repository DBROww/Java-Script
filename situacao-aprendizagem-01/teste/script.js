let form = document.querySelector("#formCadastro");

let inputNome = document.querySelector("#inputNome");
let msgNome = document.querySelector("#msgNome");

let inputEmail = document.querySelector("#inputEmail");
let msgEmail = document.querySelector("#msgEmail");

let inputSenha = document.querySelector("#inputSenha");
let msgSenha = document.querySelector("#msgSenha");

let confirmaSenha = document.querySelector("#confirmarSenha");
let msgConfirm = document.querySelector("#msgConfirm");

let inputCEP = document.querySelector("#inputCEP");
let msgCEP = document.querySelector("#msgCEP");

let inputTelefone = document.querySelector("#inputTelefone");
let msgTelefone = document.querySelector("#msgTelefone");

let lista = document.querySelector("#lista");
let plus = document.querySelector("#plus");


// VALIDAÇÕES
function validarNome(nome) {
    return /^[A-Za-zÀ-ÿ\s]+$/.test(nome);
}

function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarSenha(senha) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#]).{8,}$/.test(senha);
}

function validarTelefone(tel) {
    return /^\+\d{2}\s?\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(tel);
}

function validarCEP(cep) {
    return /^\d{5}-?\d{3}$/.test(cep);
}


// MOSTRAR SENHA
document.querySelector("#mostrarSenha").addEventListener("click", () => {
    inputSenha.type = inputSenha.type === "password" ? "text" : "password";
});


// ADICIONAR TELEFONE
plus.addEventListener("click", () => {

    let li = document.createElement("li");

    let input = document.createElement("input");
    let remove = document.createElement("i");
    let erro = document.createElement("span");

    input.type = "text";

    remove.classList.add("bi", "bi-x-circle-fill", "excluir-icon");
    erro.classList.add("msgSpan");

    li.appendChild(input);
    li.appendChild(remove);
    li.appendChild(erro);

    lista.appendChild(li);

    // validar telefone novo
    input.addEventListener("input", () => {
        if (!validarTelefone(input.value)) {
            input.style.border = "2px solid red";
            erro.textContent = "Telefone inválido";
        } else {
            input.style.border = "2px solid blue";
            erro.textContent = "";
        }
    });

    // remover
    remove.addEventListener("click", () => {
        lista.removeChild(li);
    });
});


// BLOQUEAR SUBMIT
form.addEventListener("submit", function (e) {

    let valido = true;

    if (!validarNome(inputNome.value)) valido = false;
    if (!validarEmail(inputEmail.value)) valido = false;
    if (!validarSenha(inputSenha.value)) valido = false;
    if (confirmaSenha.value !== inputSenha.value) valido = false;
    if (!validarCEP(inputCEP.value)) valido = false;
    if (!validarTelefone(inputTelefone.value)) valido = false;

    // validar extras
    lista.querySelectorAll("input").forEach(input => {
        if (!validarTelefone(input.value)) {
            input.style.border = "2px solid red";
            valido = false;
        }
    });

    if (!valido) {
        e.preventDefault();
        alert("Preencha todos os campos corretamente!");
    }
});