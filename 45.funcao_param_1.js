// Trabalhando com funções no Javascript - Utilizando Paramêtros

// retorno com console.log interno
function dobra(num) {
    let result = num * 2;
    console.log("O dobro do número informado é " + result);
}

dobra(6);

// retorno com console.log externamente
function dobro(num) {
    return "O dobro do número informado é " + num * 2;
}

console.log(dobro(6));

// retorno para contar quantas letras tem um texto ou palavra
function contar_txt(txt) {
    total = txt.length;
    console.log("O texto ou a palavra digitada contém " + total + " caracteres.");
}

let texto = "Era uma vez em nova lima.";

contar_txt(texto);