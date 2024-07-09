// Arrow functions Simples - Aplicando calculos de Desconto

// function result(valor, desconto) {
//     return valor - (valor * (desconto / 100));
// }
// console.log(result(125.99, 15).toFixed(2));

const ler = require('readline-sync');

let result = (valor, desconto) => valor - (valor * (desconto / 100));

let valor = ler.questionFloat("Digite um valor: ");
let desconto = ler.questionFloat("Informe qual será o desconto %: ");

let valorDesc = result(valor, desconto).toFixed(2);

console.log(`O valor de R$ ${valor} com desconto de ${desconto}% será de R$ ${valorDesc}`);