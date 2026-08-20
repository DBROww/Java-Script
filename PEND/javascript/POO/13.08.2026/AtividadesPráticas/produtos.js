class Produto {

    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        const novoPreco = this.preco - (this.preco * this.desconto / 100);
        return novoPreco;
    }
}


class Produtos {

    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
    }

    excluirProduto(indice) {
        this.produtos.splice(indice, 1);
        this.exibir();
    }

    exibir() {
        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        this.produtos.forEach((produto, indice) => {

            resultado.innerHTML += `
                <div class="produto">
                    <h2>Produto</h2>
                    <p>Nome: ${produto.nome}</p>
                    <p>Preço: ${produto.aplicarDesconto()} R$</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Desconto: ${produto.desconto}%</p>

                    <button onclick="produtos.excluirProduto(${indice})" class="botaoExcluir">
                        Excluir
                    </button>
                </div>
                <br>
            `;

        });
    }
}


const produtos = new Produtos();

const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");


botaoCadastrar.addEventListener("click", function () {

    const produto = new Produto(
        nome.value,
        Number(preco.value),
        categoria.value,
        Number(desconto.value)
    );

    produtos.adicionarProduto(produto);

    produtos.exibir();

});