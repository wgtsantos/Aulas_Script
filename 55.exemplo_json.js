// Salvar dados utilizando um arquivo JSON

const fs = require('fs');
const ler = require('readline-sync');

let usuarios = [];

usuarios.push({ nome: "João silva", idade: 24, email: "jojo@gmail.com" });
let dadosJSON = JSON.stringify(usuarios, null, 2);

fs.writeFileSync('55.exemplo_dados.json', dadosJSON, 'utf-8');

let nome = ler.question("Informe o nome: ");
let idade = ler.questionInt("Informe a idade: ");
let email = ler.questionEMail("Informe seu e-mail: ");

usuarios.push({ nome: nome, idade: idade, email: email });
dadosJSON = JSON.stringify(usuarios, null, 2);

fs.writeFileSync('55.exemplo_dados.json', dadosJSON, 'utf-8', (erro) => {
    if(erro) {
        console.log("Erro ao gravar dados no arquivo JSON!!");
    } else {
        console.log("Dados Gravados com Sucesso!");
    }
});

const exibirDados = fs.readFileSync('55.exemplo_dados.json', 'utf-8');
let users = JSON.parse(exibirDados);
console.table(users);



