// Importa todas as funções da calculadora.js
import * as calc from './calculadora.js';

// Coleta qual operação o usuário deseja fazer
const operacao = prompt(
    
    "Olá, Escolha a operação: (apenas o número)\n" +
    "1 - Somar\n" +
    "2 - Subtrair\n" +
    "3 - Multiplicar\n" +
    "4 - Dividir\n" +
    "5 - Exponencial\n" +
    "6 - Radical"
);

// Coleta os números (Tratando as entradas como números decimais)
const num1 = parseFloat(prompt("Digite o primeiro número ou índice:"));
const num2 = parseFloat(prompt("Digite o segundo número ou expoente:"));

// Executa a lógica com base na escolha do usuário dentro do try/catch para capturar os erros
try {
    let resultado;

    switch (operacao) {
        case '1':
            resultado = calc.somar(num1, num2);
            alert(`Resultado da Soma: ${resultado}`);
            break;
        case '2':
            resultado = calc.subtrair(num1, num2);
            alert(`Resultado da Subtração: ${resultado}`);
            break;
        case '3':
            resultado = calc.multiplicar(num1, num2);
            alert(`Resultado da Multiplicação: ${resultado}`);
            break;
        case '4':
            resultado = calc.dividir(num1, num2);
            alert(`Resultado da Divisão: ${resultado}`);
            break;
        case '5':
            resultado = calc.exponencial(num1, num2);
            alert(`Resultado do Exponencial: ${resultado}`);
            break;
        case '6':
            // No caso do radical, lembre-se que o usuário digita primeiro a raiz (num1) e depois o número (num2)
            // Mas a sua função espera radical(numero, indice). Invertemos aqui na chamada:
            resultado = calc.radical(num2, num1);
            alert(`Resultado do Radical: ${resultado}`);
            break;
        default:
            alert("Operação inválida selecionada.");
    }
} catch (erro) {
    // Captura os erros gerados pelas validações que criamos no calculadora.js
    alert(`Erro no cálculo: ${erro.message}`);
}
