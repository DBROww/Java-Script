// CLASSE - Modelo para criar objetos
class Produto {

    // CONSTRUTOR - Método que define os valores iniciais do objeto
    constructor(nome, id, marca, preco, dataFabricacao, dataValidade, quantidade) {
        // Atributos da classe
        // THIS - Significa "Este objeto"
        this.nome = nome;
        this.id = id;
        this.marca = marca;
        this.preco = preco;
        this.dataFabricacao = dataFabricacao;
        this.dataValidade = dataValidade;
        this.quantidade = quantidade;

    }
    // CRIANDO MÉTODOS

    // MÉTODO 1
    vender() {
        console.log(`Produto: ${this.nome} - ID: ${this.id} -> vendido. `);
    }

    //MÉTODO 2
    comprar() {
        console.log(`Produto: ${this.nome} - ID: ${this.id} -> comprado para estoque. `);
    }

    // MÉTODO 3
    vencido() {
        console.log(`Produto: ${this.nome} - ID: ${this.id} -> estragou/venceu. `);
    }

    // MÉTODO 4
    emEstoque() {
        console.log(`Produto: ${this.nome} - ID: ${this.id} -> em estoque. `);
    }

    // MÉTODO 5
    atualizar() {
        console.log(`Produto: ${this.nome} - ID: ${this.id} -> atualizado. `);
    }
}

//------------------------------------------------------------------------------------

//CRIANDO OBJETOS

// OBJETO 1
const produto1 = new Produto(
    "Arroz",
    1,
    "Panela de Ferro",
    26,
    "10/01/2026",
    "10/01/2027",
    100
);
console.log("Produto 1:", produto1);

// OBJETO 2
const produto2 = new Produto(
    "Feijão",
    2,
    "Camil",
    12,
    "05/02/2026",
    "05/02/2027",
    80
);
console.log("Produto 2:", produto2);

// OBJETO 3
const produto3 = new Produto(
    "Macarrão",
    3,
    "Renata",
    8,
    "20/03/2026",
    "20/09/2027",
    150
);
console.log("Produto 3:", produto3);

//------------------------------------------------------------------------------------

// EXIBINDO ATRIBUTOS DE OUTRA FORMA

// Produto 1
console.log("-------------------------");
console.log("Atributos do Produto 1: ");
console.log("-Nome:", produto1.nome);
console.log("-ID: ", produto1.id);
console.log("-Marca: ", produto1.marca);
console.log("-Preço: ", produto1.preco);
console.log("-Data de fabricação: ", produto1.dataFabricacao);
console.log("-Data de validade: ", produto1.dataValidade);
console.log("-Quantidade: ", produto1.quantidade);
console.log("-------------------------");

// Produto 2
console.log("-------------------------");
console.log("Atributos do Produto 2: ");
console.log("-Nome:", produto2.nome);
console.log("-ID: ", produto2.id);
console.log("-Marca: ", produto2.marca);
console.log("-Preço: ", produto2.preco);
console.log("-Data de fabricação: ", produto2.dataFabricacao);
console.log("-Data de validade: ", produto2.dataValidade);
console.log("-Quantidade: ", produto2.quantidade);
console.log("-------------------------");

// Produto 3
console.log("-------------------------");
console.log("Atributos do Produto 3: ");
console.log("-Nome:", produto3.nome);
console.log("-ID: ", produto3.id);
console.log("-Marca: ", produto3.marca);
console.log("-Preço: ", produto3.preco);
console.log("-Data de fabricação: ", produto3.dataFabricacao);
console.log("-Data de validade: ", produto3.dataValidade);
console.log("-Quantidade: ", produto3.quantidade);
console.log("-------------------------");

//------------------------------------------------------------------------------------

//CHAMANDO MÉTODOS

// Métodos
produto1.vender()
produto2.vencido()
produto2.comprar()
produto3.emEstoque()
produto1.atualizar()

