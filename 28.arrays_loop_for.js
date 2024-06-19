// Ordenando valores do array com for

let numeros = [12, 34, 51, 11, 78, 41, 23];

// Listar os dados do array
for (let i = 0; i < numeros.length; i++) {
   
    console.log(numeros[i]);
}

console.log("----------------------------------");

// Listar os dados do array invertidos 
for (let i = numeros.length - 1; i >= 0 ; i--) {
    
    console.log(numeros[i]);
}

console.log("----------------------------------");

// Listar os dados do array, pulando alguns dados
for (let i = 0; i < numeros.length; i+=2) {
   
    console.log(`posição: ${i} = ${numeros[i]}`);    
}