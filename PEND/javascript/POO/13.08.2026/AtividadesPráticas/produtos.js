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

        // Carrega os produtos salvos no localStorage
        this.carregarProdutos();

        // Exibe os produtos automaticamente quando carregar a página
        this.exibir()
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);

        // Atualiza o localStorage
        this.salvarProdutos();
    }

    excluirProduto(indice) {
        this.produtos.splice(indice, 1);

        // Atualiza o localStorage após excluir
        this.salvarProdutos();

        // Atualiza a lista na tela
        this.exibir();
    }

    salvarProdutos() {
        localStorage.setItem("produtos", JSON.stringify(this.produtos));
    }

    carregarProdutos() {
        const produtosSalvos = localStorage.getItem("produtos");

        if (produtosSalvos) {
            const produtos = JSON.parse(produtosSalvos);

            this.produtos = produtos.map(produto => {
                return new Produto(
                    produto.nome,
                    produto.preco,
                    produto.categoria,
                    produto.desconto
                );
            });
        }
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

                    <button 
                        onclick="produtos.excluirProduto(${indice})" 
                        class="botaoExcluir">
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