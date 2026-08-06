console.log("Olá, JavaScript!");

let a = 10;
let b = 3;
let c = 9;
console.log(`Adição: ${a} + ${b} =` , a + b);
console.log(`Subtração: ${a} - ${b} =` , a - b);
console.log(`Multiplicação: ${a} * ${b} =` , a * b);
console.log(`Divisão: ${a} / ${b} =` , a / b);
console.log(`Resto da divisão: ${a} % ${b} =` ,  a % b);
console.log(`Exponenciação: ${a} ** ${b} =` , a ** b);

let contador = 5;
contador++;
console.log(`Incremento: 5 ++ 1 =` , contador);

console.log("\n");

console.log(`N1: ${a} | N2: ${b} | N3: ${c}`); //Média de 3 números
const media = console.log("Média =" , (a + b + c)/3);

console.log(`Resto da divisão: ${a} % ${c} =` ,  a % b); //Resto de divisão

// Exemplo 2
console.log("\n");

let x = 10;
let y = "10";

console.log( `${x} == (Igual -> Valor) "${y}":` , x == y);
console.log(`${x} === (Igual -> Valor e tipo var.) "${y}":` , x === y);
console.log(`${x} != (Diferente -> Valor) "${y}":` , x != y);
console.log(`${x} !== (Diferente - Valor e tipo) "${y}":` , x !== y);

// Exercicio 3
console.log("\n");

let idade = 17;
console.log(`Idade: ${idade}`);
if (idade < 18) {
    console.log("Você é menor de idade");
}else{
    console.log("Você é maior de idade");
}

// Exercicio 4
console.log("\n");

let n1 = 7;
let n2 = 3;
console.log(`Número 1: ${n1} \nNúmero 2: ${n2}`);
if (n1 > n2){
    console.log(`${n1} > ${n2}`);
}else if (n1 === n2){
    console.log(`${n1} = ${n2}`);
}else{
    console.log(`${n2} > ${n1}`);
}

// Operadores lógicos
console.log("\nOperadores Lógicos\n");

let idade2 = 20;
let temCarteira = true;

console.log(idade2 >= 18 && temCarteira); // && = E/AND

let chovendo = false;
let guardaChuva = true;

console.log(chovendo || guardaChuva); // || = OU/OR

let ligado = false;
console.log(!ligado); //true (! = inverso/not)

// Exercicio 5
console.log("\n")

let nota = 9;
let frequencia = 74;

if (nota >= 7 && frequencia >=75){
    console.log("Aprovado");
}else{
    console.log("Reprovado");
}// Reprovado

let nome = "Davi";
let senha = "12345";
let token = true;

if (nome === "Davi" && senha === "12345" || token === true){
    console.log("Bem-Vindo!");
}else{
    console.log("Acesso negado.");
}