export function somar(a, b) {
    return a + b;
}

export function subtrair(a, b) {
    return a - b;
}

export function multiplicar(a, b) {
    return a * b;
}

export function dividir(a, b) {

    if (b === 0) {
        throw new RangeError("Divisão por zero não é permitida.");
    }

    return a / b;
}

export function exponencial(a, b) {

    if (a === 0 && b <= 0) {
        throw new RangeError("Resultado indeterminado ou divisão por zero em potência de base zero.");
    }

    return a ** b;
}

export function radical(a, b) {

    if (b === 0) {
        throw new RangeError("O índice da raiz (b) não pode ser zero.");
    }

    if (a < 0 && b % 2 === 0) {
        throw new RangeError("Não é possível calcular a raiz par de um número negativo no conjunto dos reais.");
    }

    if (a < 0) {
        return -((-a) ** (1 / b));
    }
    
    return a ** (1 / b);
}