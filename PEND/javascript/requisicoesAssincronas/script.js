const resultado = document.querySelector("#resultado");
const botaoBuscar = document.querySelector("#buscarUsuarios");
const idUsuario = document.querySelector("#idUsuario");
const botao = document.querySelector("#botao");

// fetch() exemplo 01
// botaoBuscar.addEventListener("click", function(){

//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(resposta => resposta.json())
//         .then(dados => {
//             console.log(dados);

//             resultado.innerHTML = "";

//             dados.forEach(usuario => {
//                 resultado.innerHTML += `
//                     <p>
//                         <strong>${usuario.name}</strong><br>
//                         ${usuario.email}
//                     </p>
//                     <hr>
//                 `
//             });
//         })
//         .catch(erro => {
//             resultado.innerHTML = "Erro ao buscar usuários"
//             console.log("Erro:", erro);
//         });

// })

// -------------------------------------------------------------------------------------------------------------------

// //async await exemplo02
botaoBuscar.addEventListener("click", async () => {

    try {
        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const dados = await resposta.json();

        resultado.innerHTML = "";

        dados.forEach(usuario => {
            resultado.innerHTML += `
                    <p>
                        <strong>${usuario.name}</strong><br>
                        ${usuario.email}
                    </p>
                    <hr>
                `;
        });

    } catch (erro) {
        resultado.innerHTML = "Erro ao buscar usuários"
        console.log(erro);

    }
});

//---------------------------------------------------------------------------------------------------------------------

botao.addEventListener("click", async () => {

    const id = idUsuario.value;
    if (id === "") {
        resultado.innerHTML = "Digite um ID";
        return;
    }

    try {

        const resposta = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const dados = await resposta.json();

        resultado.innerHTML = `
                    <p>
                        <strong>${dados.name}</strong><br>
                        Email: ${dados.email}<br>
                        Cidade: ${dados.address.city}<br>
                        Telefone: ${dados.phone}
                    </p>
                    <hr>
                `;

    } catch (erro) {
        resultado.innerHTML = "Erro ao buscar usuários."
        console.log(erro);
    }
});