// Função 1

function saudacao() {
    console.log("Olá, JavaScript!");
}

saudacao();

// Função 2 

function saudacao2(nome) {
    console.log("Olá, " + nome);
}

saudacao2("Davi"); // função sem retorno

// Função 3

function somar(a, b) {
    return a + b;
} // função com retorno

console.log(somar(5,3));

// Exercicio 7 
console.log("\n");

function imc(peso, altura) {
    return peso / (altura**2);
}

console.log(imc(64, 1.71));

// Exercicio 8
console.log("\n");

function imparPar(numero) {
    if (numero % 2 === 0){
        return(`O número ${numero} é par`);
    }else{
        return (`O número ${numero} é ímpar`);
    }
}

console.log(imparPar(7));

// Função Data e Hora
console.log("\n");

let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let data = new Date();

    console.log("Dia:", data.getDate());
    console.log("Mês:", data.getMonth() + 1);
    console.log("Ano:", data.getFullYear());
    console.log("Hora:", data.getHours());
    console.log("Minutos:", data.getMinutes());
    
}

mostrarDataHora();

function mostrarDataHoraPlus() {
    let data = new Date();
    console.log(`Hora: ${String(data.getHours()).padStart(2, '0')}:${String(data.getMinutes()).padStart(2, '0')}:${String(data.getSeconds()).padStart(2, '0')} Data: ${String(data.getDate()).padStart(2, '0')}/${String(data.getMonth() + 1).padStart(2, '0')}/${data.getFullYear()}`);
    
    //String().padStart(2, '0') --> Função para colocar zero em 2 digitos no começo do número caso o valor não possua dois zeros, Exemplo: 1 -> 01 0 -> 00.
}

mostrarDataHoraPlus();

// Funções Matemáticas
console.log("\n")

console.log(Math.PI);

function calcularOperacoes(numero) {
    console.log("Raiz:", Math.sqrt(numero));
    console.log("Arredondado:", Math.round(numero));
    console.log("Para cima:", Math.ceil(numero));
    console.log("Para baixo:", Math.floor(numero));
    console.log("Quadrado:", Math.pow(numero, 2));
    console.log("Valor absoluto:", Math.abs(numero));
}

calcularOperacoes(7.8);

// Funções String

// 1
function analisarTexto(texto) {
    console.log("Tamanho:", texto.length);
    console.log("Maiúsculo:", texto.toUpperCase());
    console.log("Minúsculo:", texto.toLowerCase());
}

analisarTexto("JavaScript");

// 2
function palavraPresente(frase) {
    console.log(frase.includes("JavaScript"));
}

palavraPresente("Eu estudo JavaScript");

// 3
function adicionaVariavel(nome, curso) {
    return "Aluno: " + nome + "| Curso: " + curso;
}

console.log(adicionaVariavel("José", "Front-End"));