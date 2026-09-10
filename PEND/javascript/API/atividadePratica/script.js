const video = document.querySelector("#camera");
const canvas = document.querySelector("#canvas");
const botao = document.querySelector("#botao");
const foto = document.querySelector("#foto");
const resposta = document.querySelector("#resposta");

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
        video.srcObject = stream;
        camera = true;
    })

    .catch(function (erro) {
        console.log("Erro ao acessar a câmera", erro);
        camera = false;
    });


botao.addEventListener('click', function () {

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    if (localizacao & camera !== false) {
        resposta.textContent = "Ponto confirmado!";
        resposta.classList.remove('aviso');
        resposta.classList.add('feedback');

        foto.src = canvas.toDataURL("image/png");
        video.style.display = "none";
        foto.style.display = "block";
    }
    else {
        resposta.textContent = "A Localização e a Câmera precisam estar ativas!";
        resposta.classList.add('aviso');
    }


});
