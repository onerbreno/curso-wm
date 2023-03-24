const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
//     console.log(acumulador, atual)
//     return acumulador + atual
// }, 0)

// console.log(resultado)

const bolsas = alunos.map(aluno => aluno.bolsista)


// Desafio 1: Todos os alunos são bolsistas?
// const todosBolsistas = bolsas.reduce((acumulador, atual) => {
//     return acumulador = acumulador ? atual : acumulador
// })
const todosBolsistas = bolsas.reduce((resultado, bolsista) => resultado && bolsista)
console.log(todosBolsistas)


// Desafio 2: Algum aluno é bolsista?
// const existeBolsista = bolsas.reduce((acumulador, atual, indice, array) => {
//     return acumulador = acumulador ? acumulador : atual
// })
const existeBolsista = bolsas.reduce((resultado, bolsista) => resultado || bolsista)
console.log(existeBolsista)


// Outra maneira de resolver os desafios usando every() e some()

const bolsistas = e => e.bolsista

// every() testa se todos os elementos do array passam no teste lógico da 
// função callback e retorna TRUE
let resultado = alunos.every(bolsistas)
console.log(resultado)

// some() testa se algum dos elementos do array passa no teste lógico da 
// função callback e retorna TRUE
resultado = alunos.some(bolsistas)
console.log(resultado)