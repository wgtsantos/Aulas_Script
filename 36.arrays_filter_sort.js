// Ordenar arrays - objetos e matriz - Ordem Alfabética / Crescente e Decrescente

let nomes = ["Ziraldo", "Bruna", "Jonas", "Maria", "Geralda", "Alice"];

let numeros = [12, 34, 5, 51, 11, 78, 7, 41, 23, 2];

let usuarios = [
    { nome: "Marta Rocha", idade: 46, email: "marta@gmail.com" },
    { nome: "Zildelino Sena", idade: 24, email: "marcos@outlook.com" },
    { nome: "Luiza Silva", idade: 19, email: "lulu2015@gmail.com" },
    { nome: "Jonas Maia", idade: 21, email: "jonas@hotmail.com" },
    { nome: "Ricardo Souza", idade: 31, email: "ricardo@gmail.com" }
];

// let ordem_alfa = nomes.sort();
let ordem_alfa = nomes.sort((a, b) => a.localeCompare(b));
console.log(ordem_alfa);

// let ordem_cres = numeros.sort();
let ordem_cres = numeros.sort((x, y) => x - y);
console.log(ordem_cres);

// let ordem_desc = numeros.reverse();
let ordem_desc = numeros.sort((x, y) => y - x);
console.log(ordem_desc);

let users_alfa = usuarios.sort((a, b) => a.nome.localeCompare(b.nome));
console.table(users_alfa);

let users_idade_cres = usuarios.sort((x, y) => x.idade - y.idade);
console.table(users_idade_cres);