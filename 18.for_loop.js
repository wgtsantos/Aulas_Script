// Estrutura de repetição FOR

const ler = require('readline-sync');

let x = ler.questionInt("Informe um numero: ");

// Loop em ordem crescente
for (let i = 0; i <= x; i++) {
        
    console.log(i);
}

console.log("------------------------------------------------");

// Loop em ordem decrescente
for (let i = x; i >= 0; i--) {
        
    console.log(i);
}