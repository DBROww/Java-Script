// Chamando chave API
const API_KEY = "cad0532dccdf4a35933a51659d442066";
const URL_BASE = "https://api.rawg.io/api";

// Chamando HTML
const inputJogo = document.querySelector("#inputJogo");
const pesquisarJogo = document.querySelector("#pesquisarJogo");

const ultimosJogos = document.querySelector(".ultimosJogos");
const jogoAleatorio = document.querySelector(".jogoAleatorio");
const listaAvaliados = document.querySelector(".listaAvaliados");
const jogosGeneros = document.querySelector(".jogosGeneros");
const fotoJogo = document.querySelector(".fotoJogo");

const resultado = document.querySelector("#resultado");

// Eventos 

pesquisarJogo.addEventListener("click", pesquisar);

ultimosJogos.addEventListener("click", buscarUltimosJogos);

jogoAleatorio.addEventListener("click", buscarJogoAleatorio);

listaAvaliados.addEventListener("click", jogoAvaliado);

jogosGeneros.addEventListener("click", buscarGeneros);

fotoJogo.addEventListener("click", buscarFotos);

// Definindo funções
async function fazerRequisicao(url) {

    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error("Erro ao consultar a API.");
    }

    const dados = await resposta.json();

    return dados;
}

// Função para pesquisar um jogo
async function pesquisar() {

    const nomeJogo = inputJogo.value.trim();

    if (nomeJogo === "") {

        resultado.innerHTML =
            `
                <p>Digite o nome de um jogo para continuar a pesquisa.</p>
            `;

        return;
    }

    resultado.innerHTML = "<p>Pesquisando...</p>"; // feedback para o usuário

    try {

        const url = `${URL_BASE}/games?key=${API_KEY}&search=${encodeURIComponent(nomeJogo)}&page_size=10`; // Chama a API

        const dados = await fazerRequisicao(url); // Espera o resultado da API

        if (dados.results.length === 0) {

            resultado.innerHTML =
                `
                    <p>Nenhum jogo encontrado.</p>
                `; // feedback para o usuário

            return;
        }

        // Resultado da pesquisa
        resultado.innerHTML = `
                <h2>Resultados para: ${nomeJogo}</h2>
            `;

        dados.results.forEach(jogo => {

            resultado.innerHTML += `
                    <article class="cardJogo">
                    
                        <h2>${jogo.name}</h2>

                        <img 
                            src="${jogo.background_image || ""}" 
                            alt="Capa de ${jogo.name}"
                        >


                        <p>
                             Nota: ⭐${jogo.rating || "Não disponível"}
                        </p>

                        <p>
                            Lançamento: ${jogo.released || "Não informado"}
                        </p>

                        <p>
                            Avaliações: ❤️${jogo.ratings_count || 0}
                        </p>

                    </article>
                `;
        });

    } catch (erro) {

        resultado.innerHTML = `
                <p>
                    Erro ao pesquisar o jogo.
                </p>
            `;

        console.error(erro);
    }
}


// últimos jogos lançados no mês
async function buscarUltimosJogos() {

    resultado.innerHTML = "<p>Buscando jogos lançados recentemente...</p>";

    try {
        const hoje = new Date();
        const ano = hoje.getFullYear();

        // Janeiro = 0, por isso + 1
        const mes = String(hoje.getMonth() + 1).padStart(2, "0"); // Adiciona 0 na frente enquanto for uma unidade

        const primeiroDia = `${ano}-${mes}-01`;

        const ultimoDia = new Date(ano, hoje.getMonth() + 1, 0)
            .getDate();

        const dataFinal =
            `${ano}-${mes}-${String(ultimoDia).padStart(2, "0")}`;

        const url =
            `${URL_BASE}/games?key=${API_KEY}` +
            `&dates=${primeiroDia},${dataFinal}` +
            `&ordering=-released` +
            `&page_size=10`;

        const dados = await fazerRequisicao(url); // Chama a API

        resultado.innerHTML = `
                <h2>Jogos lançados este mês:</h2>
            `;

        dados.results.forEach(jogo => {

            resultado.innerHTML += `
                    <article class="cardJogo">

                        <h3>${jogo.name}</h3>

                        <img 
                            src="${jogo.background_image || ""}" 
                            alt="Capa de ${jogo.name}"
                        >


                        <p>
                            ${jogo.released || "Data não disponível"}
                        </p>

                        <p>
                            ⭐ ${jogo.rating || "Sem nota"}
                        </p>

                    </article>
                `;
        });

    } catch (erro) {

        resultado.innerHTML = `
                <p>
                    Não foi possível carregar os jogos.
                </p>
            `;

        console.error(erro);
    }
}


// Jogo aleatório para o botão: Você sabia?
async function buscarJogoAleatorio() {

    resultado.innerHTML = "<p>Procurando uma curiosidade...</p>"; // Feedback

    try {

        const url =
            `${URL_BASE}/games?key=${API_KEY}&page_size=40`;

        const dados = await fazerRequisicao(url);

        if (dados.results.length === 0) {

            throw new Error("Nenhum jogo encontrado.");
        }

        // Escolhe um jogo aleatoriamente
        const indice =
            Math.floor(Math.random() * dados.results.length);

        const jogo = dados.results[indice];

        resultado.innerHTML = `

                <article class="cardJogo">

                    <h2>Você já conhecia?</h2>

                    <h2>${jogo.name}</h2>

                    <img 
                        src="${jogo.background_image || ""}" 
                        alt="Imagem de ${jogo.name}"
                    >


                    <p>
                         Nota: ⭐ ${jogo.rating || "Não disponível"} 
                    </p>

                    <p>
                        Lançamento:
                        ${jogo.released || "Não informado"}
                    </p>

                    <p>
                        Número de avaliações: ❤️
                        ${jogo.ratings_count || 0} 
                    </p>

                </article>
            `;

    } catch (erro) {

        resultado.innerHTML = `
                <p>
                    Erro ao buscar jogo aleatório.
                </p>
            `;

        console.error(erro);
    }
}


// Busca a lista dos jogos mais avaliados
async function jogoAvaliado() {

    resultado.innerHTML =
        "<p>Buscando jogos mais bem avaliados...</p>"; // Feedback

    try {
        const url =
            `${URL_BASE}/games?key=${API_KEY}` +
            `&ordering=-rating` +
            `&page_size=10`;

        const dados = await fazerRequisicao(url);

        resultado.innerHTML = `
                <h2>Jogos mais bem avaliados 🏆</h2>
            `;

        dados.results.forEach((jogo, indice) => {

            resultado.innerHTML += `

                    <article class="cardJogo">

                        <h3>
                            ${indice + 1}º - ${jogo.name}
                        </h3>

                        <img 
                            src="${jogo.background_image || ""}" 
                            alt="Capa de ${jogo.name}"
                        >

                        <p>
                            Nota: ⭐
                            ${jogo.rating || "Não disponível"}
                        </p>

                        <p>
                            Lançamento:
                            ${jogo.released || "Não informado"}
                        </p>

                    </article>
                `;
        });

    } catch (erro) {

        resultado.innerHTML = `
                <p>
                    Erro ao carregar a lista.
                </p>
            `;

        console.error(erro);
    }
}


// Generos de jogos
async function buscarGeneros() {

    resultado.innerHTML = "<p>Carregando gêneros...</p>"; // Feedback

    try {

        const url =
            `${URL_BASE}/genres?key=${API_KEY}`;

        const dados = await fazerRequisicao(url);

        resultado.innerHTML = `
                <h2>Gêneros de jogos 🎮</h2>
            `;

        dados.results.forEach(genero => {

            resultado.innerHTML += `

                    <article class="cardGenero">

                        <img 
                            src="${genero.image_background || ""}" 
                            alt="${genero.name}"
                        >

                        <h3>${genero.name}</h3>

                        <p>
                            Jogos cadastrados:
                            ${genero.games_count}
                        </p>

                    </article>
                `;
        });

    } catch (erro) {

        resultado.innerHTML = `
                <p>
                    Erro ao carregar os gêneros.
                </p>
            `;

        console.error(erro);
    }
}


// Buscar a foto de um jogo especifico
async function buscarFotos() {

    const nomeJogo = inputJogo.value.trim();

    if (nomeJogo === "") {

        resultado.innerHTML = `
                <p>
                    Digite primeiro o nome de um jogo.
                </p>
            `;

        return;
    }

    resultado.innerHTML =
        "<p>Procurando o jogo...</p>"; // Feedback

    try {

        // Encontra o jogo
        const urlBusca =
            `${URL_BASE}/games?key=${API_KEY}` +
            `&search=${encodeURIComponent(nomeJogo)}` +
            `&page_size=1`;

        const dadosBusca =
            await fazerRequisicao(urlBusca);

        if (dadosBusca.results.length === 0) {

            resultado.innerHTML = `
                    <p>Jogo não encontrado.</p>
                `;

            return;
        }

        const jogo = dadosBusca.results[0];

        // Buca as fotos
        const urlFotos =
            `${URL_BASE}/games/${jogo.id}/screenshots?key=${API_KEY}`;

        const dadosFotos =
            await fazerRequisicao(urlFotos);

        resultado.innerHTML = `
                <h2>Fotos de ${jogo.name}</h2>
            `;

        if (dadosFotos.results.length === 0) {

            resultado.innerHTML += `
                    <p>
                        Não existem fotos disponíveis em nosso sistema.
                    </p>
                `;

            return;
        }

        dadosFotos.results.forEach(foto => {

            resultado.innerHTML += `

                    <img
                        class="screenshot"
                        src="${foto.image}"
                        alt="Screenshot de ${jogo.name}"
                    >
                `;
        });

    } catch (erro) {

        resultado.innerHTML = `
                <p>
                    Erro ao carregar as fotos.
                </p>
            `;

        console.error(erro);
    }
}