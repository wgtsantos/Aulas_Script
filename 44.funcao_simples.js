// Trabalhando com funções no Javascript - SIMPLES

function hello() {
    console.log("Hello, World!");
}

function exibirData() {
    console.log(`Hoje é ${new Date().toDateString()}`);
}

function contador() {
    for (let i = 0; i < 10; i++) {
        console.log(`=> ${i}`);        
    }
}

hello();
exibirData();
contador();