// // Arrays - Vetores - Indice do Valor

let nomes = ["Marta", "Joao", "Jonas", "Maria", "Geralda", "Alice"];

const ler = require('readline-sync');

let nome = ler.question("Digite um nome: ");

let x = nomes.indexOf(nome);

if (x >= 0) {
    console.log(`O nome ${nome} está na posição ${x} no array nomes.`);
} else {
    console.log(`O nome ${nome} não existe no array nomes`);
}