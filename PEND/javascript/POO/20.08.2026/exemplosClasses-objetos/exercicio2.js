// CLASSE - Modelo para criar objetos
class Aluno {

    // CONSTRUTOR - Método que define os valores iniciais do objeto
    constructor(nome, idade, curso, matricula) {
        // Atributos da classe
        // THIS - Significa "Este objeto"
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }
    // CRIANDO MÉTODOS

    // MÉTODO 1
    aprender() {
        console.log(`O Aluno: ${this.nome} - Matrícula: ${this.matricula} -> Está em aula aprendendo. `);
    }

    // MÉTODO 2
    estudar() {
        console.log(`O Aluno: ${this.nome} - Matrícula: ${this.matricula} -> Está estudando o curso ${this.curso} `);
    }

    // MÉTODO 3
    apresentar() {
        console.log(`O Aluno: ${this.nome} - Matrícula: ${this.matricula} -> Está apresentando seu TCC `);
    }

}

//------------------------------------------------------------------------------------

//CRIANDO OBJETOS

// OBJETO 1
const aluno1 = new Aluno(
    "Davi",
    17,
    "Desenvolvimento de Sistemas",
    12345678
);
console.log("Aluno 1:", aluno1);

// OBJETO 2
const aluno2 = new Aluno(
    "João Vitor",
    17,
    "Desenvolvimento de Sistemas",
    7891011
);
console.log("Aluno 2:", aluno2);

// OBJETO 3
const aluno3 = new Aluno(
    "Hugo",
    17,
    "Qualidade",
    12131415
);
console.log("Aluno 3:", aluno3);

//------------------------------------------------------------------------------------

// EXIBINDO ATRIBUTOS DE OUTRA FORMA

// Aluno 1
console.log("-------------------------");
console.log("Atributos do Aluno 1: ");
console.log("-Nome:", aluno1.nome);
console.log("-Idade: ", aluno1.idade);
console.log("-Curso: ", aluno1.curso);
console.log("-Matrícula: ", aluno1.matricula);
console.log("-------------------------");

// Aluno 2
console.log("-------------------------");
console.log("Atributos do Aluno 2: ");
console.log("-Nome:", aluno2.nome);
console.log("-Idade: ", aluno2.idade);
console.log("-Curso: ", aluno2.curso);
console.log("-Matrícula: ", aluno2.matricula);
console.log("-------------------------");

// Aluno 3
console.log("-------------------------");
console.log("Atributos do Aluno 3: ");
console.log("-Nome:", aluno3.nome);
console.log("-Idade: ", aluno3.idade);
console.log("-Curso: ", aluno3.curso);
console.log("-Matrícula: ", aluno3.matricula);
console.log("-------------------------");

//------------------------------------------------------------------------------------

//CHAMANDO MÉTODOS

// Métodos
aluno1.aprender();
aluno2.estudar();
aluno3.apresentar();

