// Entrada de dados Utilizando a Biblioteca readline-sync

const ler = require('readline-sync');

let num1 = ler.questionInt("Digite um número: ");
let num2 = ler.questionInt("Digite outro número: ");

let soma = num1 + num2;

console.log("O resultado da soma é: " + soma);