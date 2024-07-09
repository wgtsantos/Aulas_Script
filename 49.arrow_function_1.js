// Arrow functions Simples - Representando funções com Setas =>

function calc1(x, y) {
    return x * y;
}

console.log(calc1(3, 7)); // 21
console.log("-----------------------------------");


let calc2 = function(x, y) {
    return x * y;
}

console.log(calc2(5, 2)); // 10
console.log("-----------------------------------");

let calc3 = (x, y) => x * y;

console.log(calc3(3, 6)); // 18
console.log("-----------------------------------");