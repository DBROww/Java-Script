// CLASSE - Modelo para criar objetos
class Produto {

    // CONSTRUTOR - Método que define os valores iniciais do objeto
    constructor(nome, preco, estoque) {
        // Atributos da classe
        // THIS - Significa "Este objeto"
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    // CRIANDO MÉTODOS

    // MÉTODO 1
    vender() {
        console.log(`O produto: ${this.nome}, foi vendido por: ${this.preco}R$`);
    }

    // MÉTODO 2
    repor() {
        console.log(`Foi adicionado no estoque mais X quantidades do produto: ${this.nome} -> Estoque: ${this.estoque}`);
    }

    // MÉTODO 3
    alterarPreco() {
        console.log(`O preço do produto: ${this.nome} foi alterado de: ${this.preco}R$ para -> XR$`);
    }

}

//------------------------------------------------------------------------------------

//CRIANDO OBJETOS

// OBJETO 1
const produto1 = new Produto(
    "pão",
    5,
    120
);
console.log("Produto 1:", produto1);

// OBJETO 2
const produto2 = new Produto(
    "batata",
    3,
    30
);
console.log("Produto 2:", produto2);

// OBJETO 3
const produto3 = new Produto(
    "Arroz",
    26,
    40
);
console.log("Produto 3:", produto3);


//------------------------------------------------------------------------------------

// EXIBINDO ATRIBUTOS DE OUTRA FORMA

// Produto 1
console.log("-------------------------");
console.log("Atributos do produto 1: ");
console.log("-Nome:", produto1.nome);
console.log("-Preço: ", produto1.preco);
console.log("-Estoque: ", produto1.estoque);
console.log("-------------------------");

// Produto 2
console.log("-------------------------");
console.log("Atributos do produto 2: ");
console.log("-Nome:", produto2.nome);
console.log("-Preço: ", produto2.preco);
console.log("-Estoque: ", produto2.estoque);
console.log("-------------------------");

// Produto 1
console.log("-------------------------");
console.log("Atributos do produto 3: ");
console.log("-Nome:", produto3.nome);
console.log("-Preço: ", produto3.preco);
console.log("-Estoque: ", produto3.estoque);
console.log("-------------------------");


//------------------------------------------------------------------------------------

//CHAMANDO MÉTODOS

// Métodos
produto1.vender();
produto2.repor();
produto3.alterarPreco();

