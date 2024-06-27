// Exibindo valores de um array com loop FOR IN

let animais = ["Gato", "Cachorro", "Girafa", "Leão", "Macaco", "Elefante"];

for (let animal in animais) {
    // console.log(animal); Imprime somente as posições do array
    console.log(`=> ${animais[animal]}`);
}