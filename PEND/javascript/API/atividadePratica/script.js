navigator.geolocation.getCurrentPosition(
    function (posicao) {
        const latitudeSpan = document.querySelector("#latitude");
        const longitudeSpan = document.querySelector("#longitude");
        const precisaoSpan = document.querySelector("#precisao");
        
        latitudeSpan.textContent = `Latitude: ${posicao.coords.latitude}`;
        longitudeSpan.textContent = `Longitude: ${posicao.coords.longitude}`;
        precisaoSpan.textContent = `Precisao: ${posicao.coords.accuracy}m`;

        console.log("Latitude:", posicao.coords.latitude);
        console.log("Logintude:", posicao.coords.longitude);
        console.log("Precisão:", posicao.coords.accuracy);

        localizacao = true;
    },
    function (erro) {
        console.log("Não foi possível obter a localização.", erro);
        localizacao = false;
    }
);

navigator.mediaDevices.getUserMedia({
    video: true
})

    .then(function (stream) {
        const video = document.querySelector("#camera");
        video.srcObject = stream;
        camera = true;
    })

    .catch(function (erro) {
        console.log("Erro ao acessar a câmera", erro);
        camera = false;
    });

const botao = document.querySelector("#botao");

botao.addEventListener('click', function () {
    const resposta = document.querySelector("#resposta");

    if (localizacao & camera !== false) {
        resposta.textContent = "Ponto confirmado!";
        resposta.classList.add('feedback');
    }
    else {
        resposta.textContent = "A Localização e a Câmera precisam estar ativas!";
        resposta.classList.add('aviso');
    }
});
