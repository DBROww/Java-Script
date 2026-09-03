let imagem = document.querySelector("#resposta")

let localizacaoAtiva = false;

navigator.geolocation.getCurrentPosition(
    function (posicao) {
        console.log("Latitude:", posicao.coords.latitude);
        console.log("Logintude:", posicao.coords.longitude);
        console.log("Precisão:", posicao.coords.accuracy);
        imagem.src = "https://cdn-icons-png.flaticon.com/512/9776/9776798.png";

    },
    function (erro) {
        console.log("Não foi possível obter a localização.", erro);
        imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMOazILpYLFDKdhYB-afCl3AXCnChNOJYs_8DFyqbMTg&s=10.com";
    }
);
