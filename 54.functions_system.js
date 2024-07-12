const produtos = require('./54.functions_bd');
const ler = require('readline-sync');

const cadProduto = () => {
    let x = produtos.length; // Contar quantidade de produto do Banco de dados
    let id = x + 1;
    let nome = ler.question("Digite o nome do produto: ");
    let quantidade = ler.questionInt("Informe a quantidade: ");
    let preco = ler.questionFloat("Digite o valor do produto: ");
    adicionarProduto(id, nome, quantidade, preco);
};

const adicionarProduto = (id, nome, quantidade, preco) => {
    produtos.push({id: id, nome: nome, quantidade: quantidade, preco: preco});
    console.log("Produto Cadastrado com Sucesso!!");
    console.log("...");
    ler.question("Pressione Enter para voltar ao MENU");
    console.clear();
};

const listarProduto = () => {
    console.log("--------------- Produtos Cadastrados -------------");
    produtos.forEach( produto => console.log(
        `ID: ${produto.id} -------------
         Nome: ${produto.nome}
         Quantidade: ${produto.quantidade}
         Preço: ${produto.preco}
         -------------------------------`
    ));
    console.log("--------------------------------------------------");
    console.log("...");
    ler.question("Pressione Enter para voltar ao MENU");
    console.clear();
};

const atualizarProduto = () => {

  let check = true;

  while (check) {
        
    let id = ler.questionInt("Informe o ID do produto: ");
    let produto = produtos.find(prod => prod.id === id);
    if (produto) {
        console.log(
            `ID: ${produto.id} -------------
             Nome: ${produto.nome}
             Quantidade: ${produto.quantidade}
             Preço: ${produto.preco}
             -------------------------------`
        );
        let opt = ler.questionInt("Deseja alterar este produto? 1.SIM - 2.NAO: ");
        if (opt === 1) {
            console.clear();
            attProduto(id);
            check = false;
        } else {
            console.clear();
        }
    } else {
        console.clear();
        console.log("...");
        console.log("Produto não Encontrado!!");
    }
  } 
};

const attProduto = (id) => {
    let produto = produtos.find(prod => prod.id === id);
    let attnome = ler.question(`Informe o novo nome do produto [${produto.nome}]: `);
    let attqtd = ler.questionInt(`Informe a nova quantidade [${produto.quantidade}]: `);
    let attpreco = ler.questionFloat(`Informe o novo valor [${produto.preco}]: `);
    produto.nome = attnome;
    produto.quantidade = attqtd;
    produto.preco = attpreco;
    console.log("Produto Alterado com Sucesso!!");
    console.log(
        `ID: ${produto.id} -------------
         Nome: ${produto.nome}
         Quantidade: ${produto.quantidade}
         Preço: ${produto.preco}
         -------------------------------`
    );
    console.log("...");
    ler.question("Pressione Enter para voltar ao MENU");
    console.clear();
};

const listarProdutoPorId = () => {

  let check = true;

  while (check) {
        
    let id = ler.questionInt("Informe o ID do produto: ");
    let produto = produtos.find(prod => prod.id === id);
    if (produto) {
        console.log(
            `ID: ${produto.id} -------------
             Nome: ${produto.nome}
             Quantidade: ${produto.quantidade}
             Preço: ${produto.preco}
             -------------------------------`
        );
        let opt = ler.questionInt("Deseja buscar outro produto? 1.SIM - 2.NAO: ");
        if (opt === 1) {
            console.clear();
        } else {
            check = false;
            console.clear();
        }
    } else {
        console.clear();
        console.log("...");
        console.log("Produto não Encontrado!!");
    }
  } 
};

const excluirProduto = () => {

    let check = true;
  
    while (check) {
          
      let id = ler.questionInt("Informe o ID do produto: ");
      let produto = produtos.find(prod => prod.id === id);
      let id_ex = produtos.findIndex(prod => prod.id === id);
      if (produto) {
          console.log(
              `ID: ${produto.id} -------------
               Nome: ${produto.nome}
               Quantidade: ${produto.quantidade}
               Preço: ${produto.preco}
               -------------------------------`
          );
          let opt = ler.questionInt("Tem certeza que deseja excluir este produto? 1.SIM - 2.NAO: ");
          if (opt === 1) {
              produtos.splice(id_ex, 1); // ação de exluir o produto
              console.log("Produto excluído com Sucesso!!");
              console.log("...");
              ler.question("Pressione Enter para voltar ao MENU");
              check = false;
          } else {
              check = false;
              console.clear();
          }
      } else {
          console.clear();
          console.log("...");
          console.log("Produto não Encontrado!!");
      }
    } 
  };

module.exports = { listarProduto, cadProduto, atualizarProduto, listarProdutoPorId, excluirProduto };