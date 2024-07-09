// Utilizando arrow function com IF Ternário e Array com Objetos

let usuarios = [
    { nome: "Ana", idade: 22 },
    { nome: "João", idade: 15 },
    { nome: "Maria", idade: 25 },
    { nome: "Pedro", idade: 18 },
    { nome: "Mariana", idade: 17 },
    { nome: "José", idade: 16 },
    { nome: "Carla", idade: 26 },
    { nome: "Fernando", idade: 15 },
    { nome: "Lúcia", idade: 23 },
    { nome: "Natália", idade: 13 }
];

let verificaIdade = usuario => {
    console.log(`O ${usuario.nome} tem ${usuario.idade} anos e é ${usuario.idade >= 18 ? "Maior" : "Menor"} de idade`);
};

// verificaIdade(usuarios[3]);

// for (let i = 0; i < usuarios.length; i++) {
//     verificaIdade(usuarios[i]);
// }

usuarios.forEach(verificaIdade);