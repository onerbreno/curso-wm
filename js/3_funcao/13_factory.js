// O que é uma função factory?
// Semelhante funcão construtora e classe, FACTORY é uma função que retorna um objeto

function criarPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome
  };
}

console.log(criarPessoa("Breno", "Dias"));

// Outro exemplo

function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

const spread = ["Notebook", 2213.23]
console.log(criarProduto(...spread))