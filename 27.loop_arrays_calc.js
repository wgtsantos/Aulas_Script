// Manipulando os dados do array utilizando Loop for

let numeros = [12, 34, 51, 11, 78, 41, 23];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    
    console.log(`Valor ${i}: ${numeros[i]} +`);
    soma += numeros[i]; // soma = soma + numeros[i]
}

console.log(`Total: ${soma}`);