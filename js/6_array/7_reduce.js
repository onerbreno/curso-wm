const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

let somaNotas = alunos.map(e => e.nota).reduce(function(acumulador, atual, i) {
        console.log(acumulador, atual, i)
        return acumulador + atual
    }, 0)
    
console.log(somaNotas)

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

// some() testa se ALGUM dos elementos do array passa no teste lógico da 
// função callback e retorna TRUE
resultado = alunos.some(bolsistas)
console.log(resultado)


// simulando reduce
Array.prototype.reduce2 = function(callback, initialValue) {
    // let acumulador = initialValue === undefined ? this[0] : initialValue;
    // let i = initialValue === undefined ? 1 : 0;

    let acumulador; let i;
    [acumulador, i] = (typeof initialValue === "undefined") ? [this[0], 1] : [initialValue, 0]


    for (i; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }

    return acumulador
}

let somaNotasReduce2 = alunos.map(e => e.nota).reduce2(function(acumulador, atual, i) {
    console.log(acumulador, atual, i)
    return acumulador + atual
}, 0)

console.log(somaNotasReduce2)

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]

console.log(nums.reduce2(soma))