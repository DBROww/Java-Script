let form = document.querySelector("#formCadastro"); // Seleciona o form
let input = document.querySelectorAll("input"); // Seleciona todos os inputs

let inputNome = document.querySelector("#inputNome"); // Input Nome
let msgNome = document.querySelector("#msgNome"); // span Nome

let inputEmail = document.querySelector("#inputEmail"); // Input Email
let msgEmail = document.querySelector("#msgEmail"); // span Email

let inputSenha = document.querySelector("#inputSenha"); // Input Senha
let msgSenha = document.querySelector("#msgSenha"); // span Senha

let confirmaSenha = document.querySelector("#confirmarSenha"); // input Confirmar senha
let msgConfirm = document.querySelector("#msgConfirm"); // span Confirmar senha

let inputTelefone = document.querySelector("#inputTelefone"); // Input Telefone
let msgTelefone = document.querySelector("#msgTelefone"); // span Telefone

let lista = document.querySelector("#lista"); // Lista para adicionar novos Telefones

let inputCEP = document.querySelector("#inputCEP"); // Input CEP
let msgCEP = document.querySelector("#msgCEP"); // span CEP

let msgCadastro = document.querySelector("#msgCadastro"); // span Cadastro

//Funções
// ----------------------------------------------------------------------------------------------------------------------------

// Função para validar Nome
function validarNome(nome) {
    const padraoNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/; // REGEX para validar nome
    return padraoNome.test(nome.trim());
}

// Função para validar Email
function validarEmail(email) {
    const padraoEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // REGEX para validar email
    return padraoEmail.test(email.trim());
}

// Função para validar Senha
function validarSenha(senha) {
    const senhaForte = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#/]{8,}$/; // REGEX para validar senha
    return senhaForte.test(senha);
}

// Função para validar Telefone
function validarTelefone(telefone) {
    const padraoTelefone = /^(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[-\s]?\d{4}$/; // REGEX para valdar telefone
    return padraoTelefone.test(telefone.trim());
}

// Função para validar CEP
function validarCEP(cep) {
    const padraoCEP = /^\d{5}-?\d{3}$/; // REGEX para validar CEP
    return padraoCEP.test(cep.trim());
}

// Função para deixar a borda de todo input azul ao ser clicado
input.forEach(function (campo) { // para cada input

    campo.addEventListener("focus", function () { // ao clicar deixa a borda azul
        campo.style.border = "2px solid blue";
    });

    campo.addEventListener("blur", function () {
        campo.value = campo.value.trim();
        if (campo.style.border !== "2px solid red") { // Se a borda não estiver vermelho, remove a borda
            campo.style.border = "none";
        }
    });
});

// Funçao para mostrar erro em todos os inputs
function mostrarErro(campo, mensagem, span) {
    campo.style.border = "2px solid red"; // deiixa o Campo do input com borda vermelha
    span.textContent = mensagem; // Mensagem a ser inserida no span
    span.style.color = "red";
}

// Função para limpar o erro do input
function limparErro(campo, span) {
    span.textContent = ""; // Deixa o conteúdo do span vazio

    if (document.activeElement === campo) { // Se o input ainda estiver em foco
        campo.style.border = "2px solid blue"; // Campo do input com borda azul
    } else {
        campo.style.border = "none"; // borda normal
    }
}

// Função para mostrar/ocultar a senha
function alternarSenha(campo, icone) {
    if (campo.type === "password") { // input
        campo.type = "text"; // altera password para text
        icone.classList.replace("bi-eye-fill", "bi-eye-slash-fill"); // icone de olho
    } else {
        campo.type = "password"; // Transforma o input em type password
        icone.classList.replace("bi-eye-slash-fill", "bi-eye-fill"); // Altera o icone
    }
}

// Eventos
// ----------------------------------------------------------------------------------------------------------------------------

// Evento ao clicar no icone "#mostrarSenha" do inputSenha
document.querySelector("#mostrarSenha").addEventListener("click", function () {
    alternarSenha(inputSenha, this); // aplica a função de mostrar/ocultar senha
}); // this é usado para se "pegar" o icone clicado

// Evento ao clicar no icone "#mostrarConfirmarSenha" do input confirmaSenha
document.querySelector("#mostrarConfirmarSenha").addEventListener("click", function () {
    alternarSenha(confirmaSenha, this); // aplica a função de mostrar/ocultar senha
}); // this é usado para se "pegar" o icone clicado

// Validação do nome
inputNome.addEventListener("input", function () {
    if (inputNome.value.trim() === "") { // Se for vazio
        limparErro(inputNome, msgNome); // Deixa a borda normal
    } else if (!validarNome(inputNome.value)) {
        mostrarErro(inputNome, "Deve conter apenas letras e acentos.", msgNome); // Acrescenta o erro
    } else {
        limparErro(inputNome, msgNome); // Deixa a borda normal
    }
});

// Validação de email
inputEmail.addEventListener("input", function () {
    if (inputEmail.value.trim() === "") { // Se for vazio
        limparErro(inputEmail, msgEmail); // Deixa a borda normal
    } else if (!validarEmail(inputEmail.value)) {
        mostrarErro(inputEmail, "Digite um email valido.", msgEmail); // Acrescenta o erro
    } else {
        limparErro(inputEmail, msgEmail); // Deixa a borda normal
    }
});

// Validação de senha *mesmo padrão das outras validações
inputSenha.addEventListener("input", function () {
    if (inputSenha.value.trim() === "") {
        limparErro(inputSenha, msgSenha);
    } else if (!validarSenha(inputSenha.value)) {
        mostrarErro(inputSenha, "Min. 8 caracteres com maiuscula, minuscula, numero e simbolo.", msgSenha);
    } else {
        limparErro(inputSenha, msgSenha);
    }
    // Se o input confirmarSenha não for nulo
    if (confirmaSenha.value !== "") {
        confirmaSenha.dispatchEvent(new Event("input")); // Ativa um evento no Input 
    }
});

// Confirmar se a senha está igual a anterior *mesma lógica das outras validações
confirmaSenha.addEventListener("input", function () {
    if (confirmaSenha.value.trim() === "") { // se for vazio
        limparErro(confirmaSenha, msgConfirm);
    } else if (confirmaSenha.value !== inputSenha.value) { // se for diferente
        mostrarErro(confirmaSenha, "A senha deve ser a mesma que a anterior.", msgConfirm);
    } else { // se for válido
        limparErro(confirmaSenha, msgConfirm);
    }
});

// Validação CEP *mesma lógica das validações aneriores
inputCEP.addEventListener("input", function () {
    if (inputCEP.value.trim() === "") {
        limparErro(inputCEP, msgCEP);
    } else if (!validarCEP(inputCEP.value)) {
        mostrarErro(inputCEP, "Digite um CEP valido.", msgCEP);
    } else {
        limparErro(inputCEP, msgCEP);
    }
});

// Validação Telefone *mesma lógica das validações aneriores
inputTelefone.addEventListener("input", function () {
    if (inputTelefone.value.trim() === "") {
        limparErro(inputTelefone, msgTelefone);
    } else if (!validarTelefone(inputTelefone.value)) {
        mostrarErro(inputTelefone, "Digite um telefone valido conforme o modelo.", msgTelefone);
    } else {
        limparErro(inputTelefone, msgTelefone);
    }
});

// Evento para adicionar mais telefones ao clicar no icone "#adicionar"
document.querySelector("#adicionar").addEventListener("click", function () {

    let novoTelefone = document.createElement("li"); // adiciona um <li> na "#lista"
    let div = document.createElement("div"); // cria uma div
    div.classList.add("divTelefone"); // adiciona na div a classe divTelefone
    let inputNovo = document.createElement("input"); // Cria um input para digitar outro telefone
    let erro = document.createElement("span"); // cria o span para retornar mensagem de erro
    let remove = document.createElement("i"); // cria o icone de remover

    inputNovo.type = "text"; // Define o input como tipo texto
    inputNovo.placeholder = "Digite outro telefone";
    inputNovo.required = true; // input obrigatório

    erro.classList.add("erroDinamico"); // adiciona a classe erroDinamico ao span
    remove.classList.add("bi", "bi-dash-square-fill", "iconeRemove"); // adiciona o icone desejado ao elemento <i>

    // Adiciona os elementos dentro da div
    div.appendChild(inputNovo);
    div.appendChild(erro);
    div.appendChild(remove);

    // Adiciona a div dentro do li
    novoTelefone.appendChild(div);

    // Adiciona o li na lista
    lista.appendChild(novoTelefone);

    //Recriando função da borda azul para o inputNovo
    inputNovo.addEventListener("focus", function () {
        inputNovo.style.border = "2px solid blue";
    });

    inputNovo.addEventListener("blur", function () {
        inputNovo.value = inputNovo.value.trim();
        if (inputNovo.style.border !== "2px solid red") { // Se a borda não estiver vermelho, remove a borda
            inputNovo.style.border = "none";
        }
    });


    // Validação do input do novo telefone *mesma lógica das outras validações
    inputNovo.addEventListener("input", function () {
        if (inputNovo.value.trim() === "") {
            limparErro(inputNovo, erro);
        } else if (!validarTelefone(inputNovo.value)) {
            mostrarErro(inputNovo, "Telefone inválido!", erro);
        } else {
            limparErro(inputNovo, erro);
        }
    });
    // Ao clicar no icone "remove" apaga o <li> da "#lista"
    remove.addEventListener("click", function () {
        lista.removeChild(novoTelefone);
    });
});

// Validação do cadastro para o submit
form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede o formuláriio de ser enviado antes da validação

    let formValido = true; // define o submit como true

    // Valida cada input
    if (!validarNome(inputNome.value)) { formValido = false } // Se for diferente do REGEX - Inválido
    if (!validarEmail(inputEmail.value)) { formValido = false }
    if (!validarSenha(inputSenha.value)) { formValido = false }
    if (confirmaSenha.value !== inputSenha.value || confirmaSenha.value.trim() === "") { formValido = false }
    if (!validarCEP(inputCEP.value)) { formValido = false }
    if (!validarTelefone(inputTelefone.value)) { formValido = false }

    // Validação telefones extras
    let telefonesExtras = lista.querySelectorAll("input"); // seleciona todos os inputs dentro da lista

    telefonesExtras.forEach(function (telefoneExtra) { // para cada telefone extra
        if (telefoneExtra.value.trim() === "" || !validarTelefone(telefoneExtra.value)) { // se for vazio ou não bater com o REGEX
            formValido = false; // inválido
        }
    });

    // Validação final
    if (formValido) { // Se tudo for válido
        msgCadastro.textContent = "Cadastro realizado com sucesso!";
        msgCadastro.style.color = "green";
    } else {
        msgCadastro.textContent = "Preencha todos os campos corretamente.";
        msgCadastro.style.color = "red";
    }
});
