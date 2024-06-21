// Excluir e Adicionar dados no Arrays - SPLICE

let animais = ["Gato", "Cachorro", "Girafa", "Leão", "Macaco", "Elefante"];

let animais_removidos = animais.splice(2, 3);

console.log(animais_removidos);
console.log(animais);

console.log("-----------------------------------------");

animais.splice(1, 0, "Urso", "jacaré", "Esquilo");
console.log(animais);