// Utilizando objetos arrays bidimensionais - MATRIZ

let usuarios = [
    { nome: "Marta Rocha", idade: 46, email: "marta@gmail.com" },
    { nome: "Marcos Sena", idade: 24, email: "marcos@outlook.com" },
    { nome: "Luiza Silva", idade: 19, email: "lulu2015@gmail.com" },
    { nome: "Jonas Maia", idade: 21, email: "jonas@hotmail.com" }
];

console.table(usuarios);

console.log(usuarios[1].nome);
console.log(usuarios[3]);

usuarios.push({nome: "Rogério Matias", idade: 22, email:"roger@hotmail.com"});

console.table(usuarios);

