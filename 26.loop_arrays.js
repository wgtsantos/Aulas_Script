// Exibindo os dados do array utilizando Loop for

let animais = ["Gato", "Cachorro", "Girafa", "Leão", "Macaco", "Elefante"];

let numeros = [12, 34, 51, 11, 78, 41, 23];

console.log("------ Listando os animais do array -------");
for (let i = 0; i < animais.length; i++) {
    
    console.log(`=> ${animais[i]}`);
}

console.log("------ Listando os números do array -------");
for (let i = 0; i < numeros.length; i++) {
   
    console.log(`Valor => ${numeros[i]}`);    
}