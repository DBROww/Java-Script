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
    if (numero % 2 == 0){
        return(`O número ${numero} é par`);
    }else{
        return (`O número ${numero} é ímpar`);
    }
}

console.log(imparPar(7));