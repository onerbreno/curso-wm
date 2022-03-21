// Por que consigo alterar o conteúdo de um objeto constante?

const pessoa = { nome: 'Joao' }
// pessoa = { nome: 'Ana' } -> tenta alterara o endereço de memória
pessoa.nome = 'Pedro' // -> altera o conteúdo
console.log(pessoa)

Object.freeze(pessoa) // torna constante o conteúdo do objeto
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log (pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' }) // torna constante o conteúdo do objeto na própria criaçãox
console.log(pessoaConstante)