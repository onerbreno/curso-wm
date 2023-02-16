// O que é uma função factory?
// Semelhante funcão construtora e classe, FACTORY é uma função que retorna um objeto

function criarPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome
  }
}

console.log(criarPessoa("Breno", "Dias"))

// Outro exemplo

function criarProduto(nome, preco) {
  return {
    nome,
    preco
  }
}

console.log(criarProduto("Notebook", 2213.23))