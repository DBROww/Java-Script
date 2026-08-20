// CLASSE - Modelo para criar objetos
class Carro {

    // CONSTRUTOR - Método que define os valores iniciais do objeto
    constructor(marca, modelo, ano, cor) {
        // Atributos da classe
        // THIS - Significa "Este objeto"
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;

    }
    // CRIANDO MÉTODOS

    // MÉTODO
    ligar() {
        console.log(`${this.modelo} ligado. `);
    }

    //MÉTODO
    acelerar() {
        console.log(`${this.modelo} acelerando. `);
    }

    // MÉTODO
    frear() {
        console.log(`${this.modelo} freiou. `);
    }

    // MÉTODO
    desligar() {
        console.log(`${this.modelo} desigado. `);
    }
}

//------------------------------------------------------------------------------------

//CRIANDO OBJETOS

// Objeto
const carro1 = new Carro("Volkswagen", "Gol", 2022, "Branco");
console.log("Carro 1:", carro1);

// Objeto
const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto")
console.log("Carro 2:", carro2);

// Objeto
const carro3 = new Carro("Mitsubishi", "Eclipse", 1999, "Prata")
console.log("Carro 3:", carro3);

//------------------------------------------------------------------------------------

// EXIBINDO ATRIBUTOS DE OUTRA FORMA
console.log("-------------------------");
console.log("Atributos do Carro 1: ");
console.log("- ", carro1.marca);
console.log("- ", carro1.modelo);
console.log("- ", carro1.ano);
console.log("- ", carro1.cor);
console.log("-------------------------");

console.log("-------------------------");
console.log("Atributos do Carro 2: ");
console.log("- ", carro2.marca);
console.log("- ", carro2.modelo);
console.log("- ", carro2.ano);
console.log("- ", carro2.cor);
console.log("-------------------------");

console.log("-------------------------");
console.log("Atributos do Carro 3: ");
console.log("- ", carro3.marca);
console.log("- ", carro3.modelo);
console.log("- ", carro3.ano);
console.log("- ", carro3.cor);
console.log("-------------------------");

//------------------------------------------------------------------------------------

//CHAMANDO MÉTODOS

// Métodos
carro1.ligar();
carro1.acelerar();
carro1.frear();
carro1.desligar();