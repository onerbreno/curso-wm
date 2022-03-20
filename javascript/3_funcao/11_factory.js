// O que é uma função factory?
// Factory é uma função que retorna uma objeto

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