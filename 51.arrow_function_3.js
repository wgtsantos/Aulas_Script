// Utilizando arrow function com IF e ELSE

let verificarValor = (idade, tipo, valorIngresso) => {
    if (idade >= 18 && tipo === "normal") {
        return valorIngresso - (valorIngresso * 0.25);
    } else if (idade >= 18 && tipo === "estudante") {
        return valorIngresso - (valorIngresso * 0.50);
    } else if (idade >= 18 && tipo === "vip") {
        return valorIngresso + (valorIngresso * 0.20);
    } else {
        return "Entrada não Permitida ou Ingresso Inválido!";
    }
}

const ler = require('readline-sync');

let idade = ler.questionInt("Digite sua idade: ");
let tipo = ler.question("Informe o tipo do ingresso: ").toLowerCase();
let valorIngresso = ler.questionFloat("Digite o valor do ingresso: ");

console.log(verificarValor(idade, tipo, valorIngresso));