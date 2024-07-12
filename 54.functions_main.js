const ler = require('readline-sync');
const { listarProduto, cadProduto, atualizarProduto, listarProdutoPorId, excluirProduto } = require('./54.functions_system');

let check = true;

while (check) {
    
    console.log("-------------- Sistema de Gerenciamento de Estoque --------------");
    console.log("--Escolha as Opções Abaixo:--------------------------------------");
    console.log("1. Adicionar Novo Produto ---------------------------------------");
    console.log("2. Atualizar Produto --------------------------------------------");
    console.log("3. Listar Produto -----------------------------------------------");
    console.log("4. Listar Produto por ID ----------------------------------------");
    console.log("5. Excluir Produto ----------------------------------------------");
    console.log("6. Sair do Sistema ----------------------------------------------");
    console.log("-----------------------------------------------------------------");
    let opt = ler.questionInt("=> ");

    switch (opt) {
        case 1:
            console.clear();
            cadProduto();
            break;
        case 2:
            console.clear();
            atualizarProduto();
            break;
        case 3:
            console.clear();
            listarProduto();
            break;
        case 4:
            console.clear();
            listarProdutoPorId();            
            break;
        case 5:
            console.clear();
            excluirProduto();            
            break;
        case 6:
            check = false;
            break;
        default:
            console.log("Opção Inválida! tente novamente!!");
            break;
    }
}

console.log("Sistema Finalizado!");