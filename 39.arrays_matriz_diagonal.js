// Exibindo valores de uma matriz com FOR LOOP nas diagonais

let numeros = [
    [ 12, 7, 34, 19, 20 ],
    [ 10, 89, 21, 65, 66 ],
    [ 25, 35, 47, 17, 6 ],
    [ 15, 71, 52, 61, 41 ],
    [ 5, 44, 54, 33, 87 ]
];

console.table(numeros);

//Exibir somente os valores da diagonal esquerda da matriz 
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i][i]);
    
}

console.log("------------------------------------------");

// Exibir somente os valores da diagonal direita da matriz 
let n = numeros.length;
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i][n - i - 1]);
    
}