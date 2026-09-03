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
    },
    function (erro) {
        console.log("Não foi possível obter a localização.", erro);
    }
);

navigator.mediaDevices.getUserMedia({
    video:true
})

.then(function(stream){
    const video = document.querySelector("#camera");
    video.srcObject = stream;
})

.catch(function(erro) {
    console.log("Erro ao acessar a câmera", erro);
});