let senha = document.querySelector("#senha");
let mostrarSenha = document.querySelector("#mostrarSenha");

mostrarSenha.addEventListener("click", function(){
    if (senha.type === "password") {
        senha.setAttribute('type','text');
        mostrarSenha.classList.replace('bi-eye-fill' , 'bi-eye-slash-fill');

    }else{
        senha.setAttribute('type','password');
        mostrarSenha.classList.replace('bi-eye-slash-fill' , 'bi-eye-fill');
    }
});