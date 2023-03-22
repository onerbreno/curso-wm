const nums = [1, 2, 3, 4, 5]

// o map "mapeia" todos os elementos e retorna um array de mesmo tamanho onde cada posição foi
// transformada pela função callback 

// "for com propósito"
let resultado = nums.map(function(elementoAtual) { 
    return elementoAtual * 2
})

// o map não transforma o array atual, ele retorna outro array com as alterações

console.log(resultado, nums)

const soma10 = elemento => elemento + 10
const triplo = elemento => elemento * 3
const paraDinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) // usando o map de forma encadeada
console.log(resultado)

// desafio
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]
// retornar array apenas com preços
// let precos = carrinho.map(elemento => {
//     let objeto = JSON.parse(elemento)
//     return objeto.preco
// })

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const precos = carrinho.map(paraObjeto).map(apenasPreco)
console.log(precos)



// simulando map
// Array.prototype.map2 = function(callback) {
//     const newArray = []
//     for (let i = 0; i < this.length; i++) {
//         newArray.push(callback(this[i], i, this))
//     }
//     return newArray
// }

// const carrinho = [
//     '{ "nome": "Borracha", "preco": 3.45 }',
//     '{ "nome": "Caderno", "preco": 13.90 }',
//     '{ "nome": "Kit de lapis", "preco": 41.22 }',
//     '{ "nome": "Caneta", "preco": 7.50 }'
// ]

// const paraObjeto = json => JSON.parse(json)
// const apenasPreco = produto => produto.preco

// const precos = carrinho.map2(paraObjeto).map2(apenasPreco)
// console.log(precos)