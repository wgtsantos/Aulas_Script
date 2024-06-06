// Entrada If Ternário

const ler = require('readline-sync');

let valor = ler.questionFloat("Informe um valor: ");

var result = valor > 15.99 ? "Valor maior que 15.99" : "Valor menor que 15.99";

console.log(result);