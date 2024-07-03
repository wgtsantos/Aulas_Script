// Trabalhando com funções no Javascript - Utilizando dois ou mais Paramêtros

// Calcular valores
function somar(x, y) {
    return x + y;
}

console.log("A soma dos valores informados é ", somar(3, 4));

function calc(x, y, op) {
    if (op === 'soma') {
        return x + y;
    } else if (op === 'sub') {
       return x - y;
    } else if (op === 'mult') {
        return x * y;
    } else {
        return x / y;
    }
}

console.log("O cálculo dos valores informados é ", calc(5, 7, "mult"));