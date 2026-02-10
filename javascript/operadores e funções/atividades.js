// Função hora atual
function horaAtual() {
    let data = new Date();
    console.log(`Hora atual: ${String(data.getHours()).padStart(2, '0')}:${String(data.getMinutes()).padStart(2, '0')}:${String(data.getSeconds()).padStart(2, '0')}`);
}

horaAtual();

console.log("\n"); // Pula uma linha

// Função que recebe dois números e mostra soma e média.
function somaMedia(n1, n2) {
    console.log(`A soma de ${n1} e ${n2} é igual a: ${n1 + n2}`);
    console.log(`A média de ${n1} e ${n2} é igual a: ${(n1 + n2) / 2}`);
}

let numero1 = Number(prompt("Digite um número"));
let numero2 = Number(prompt("Digite outro número"));

somaMedia(numero1, numero2);



console.log("\n"); // Pula uma linha

// Função que recebe nome e mostra sua quantidade de letras e o mostra em maiúsculo.
function quantAndMaiusculo(nome) {
    console.log(`Quantidade de letras do nome ${nome}:`, nome.length);
    console.log(`${nome} em maiúsculo: `, nome.toUpperCase());
}

quantAndMaiusculo(prompt("Digite um nome:"));

console.log("\n"); // Pula uma linha

// Função que verifica se a palavra HTML está no texto
function palavraPresente(frase) {
    console.log(frase.includes("HTML"));
}

palavraPresente("Eu ja estudei hTmL".toUpperCase()); // Deixa o texto todo em maiúsculo, pois HTML está em maiúsculo, evitando erros. 

