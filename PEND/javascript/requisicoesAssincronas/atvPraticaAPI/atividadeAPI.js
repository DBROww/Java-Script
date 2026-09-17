const cidade = document.querySelector("#cidade");
const botao = document.querySelector("#buscar");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", consultarClima);

async function consultarClima() {

    const nomeCidade = cidade.value.trim();

    if (nomeCidade === "") {
        resultado.innerHTML = "<p>Digite uma cidade!</p>";
        return;
    }

    resultado.innerHTML = "<p>Consultando...</p>";

    try {
        // PRIMEIRA REQUISIÇÃO:
        // Descobrir latitude e longitude da cidade

        const urlGeocoding = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(nomeCidade)}&count=1&language=pt&format=json`;

        const respostaGeocoding = await fetch(urlGeocoding);

        if (!respostaGeocoding.ok) {
            throw new Error("Erro ao consultar a localização.");
        }

        // Converter resposta para JSON
        const dadosGeocoding = await respostaGeocoding.json();

        // Verificar se encontrou a cidade
        if (!dadosGeocoding.results || dadosGeocoding.results.length === 0) {
            resultado.innerHTML = "<p>Cidade não encontrada :/</p>";
            return;
        }

        // Pegar os dados da localização
        const localizacao = dadosGeocoding.results[0];
        const latitude = localizacao.latitude;
        const longitude = localizacao.longitude;

        // SEGUNDA REQUISIÇÃO:
        // Consultar o clima usando latitude e longitude
        const urlClima = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&daily=precipitation_probability_max&forecast_days=1`;

        const respostaClima = await fetch(urlClima);

        if (!respostaClima.ok) {
            throw new Error("Erro ao consultar o clima.");
        }

        // Converter resposta para JSON
        const dadosClima = await respostaClima.json();

        const probabilidadeChuva =
            dadosClima.daily.precipitation_probability_max[0];

        // Apresentar os dados no DOM
        resultado.innerHTML = `
            <h2>${localizacao.name}</h2><br>
            <div id="info">
            <p>
                <strong>País:</strong>
                ${localizacao.country}
            </p>

            <p>
                <strong>Estado:</strong>
                ${localizacao.admin1}
            </p>

            <p>
                <strong>Temperatura:</strong>
                ${dadosClima.current.temperature_2m}
                ${dadosClima.current_units.temperature_2m}
            </p>

            <p>
                <strong>Sensação térmica:</strong>
                ${dadosClima.current.apparent_temperature}
                ${dadosClima.current_units.apparent_temperature}
            </p>

            <p>
                <strong>Umidade:</strong>
                ${dadosClima.current.relative_humidity_2m}
                ${dadosClima.current_units.relative_humidity_2m}
            </p>

            <p>
                <strong>Maior probabilidade de chuva hoje:</strong>
                ${probabilidadeChuva}%
            </p>

            <p>
                <strong>Velocidade do vento:</strong>
                ${dadosClima.current.wind_speed_10m}
                ${dadosClima.current_units.wind_speed_10m}
            </p>

            <p>
                <strong>Horário da consulta:</strong>
                ${dadosClima.current.time}
            </p>
            </div>
        `;

    } catch (erro) {

        resultado.innerHTML = `
            <p>
                Ocorreu um erro ao consultar o clima :/
            </p>

            <p>
                ${erro.message}
            </p>
        `;
    }
}