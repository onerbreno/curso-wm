const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 2499, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

let produtosCarosFrageis = produtos.filter(caro).filter(fragil)
// let produtosCarosFrageis = produtos.filter(produto => produto.fragil && produto.preco >= 500)
console.log(produtosCarosFrageis)


// simulando filter
// Array.prototype.filter2 = function(callback, thisArg = this) {
//     const newArray = []
//     for (let i = 0; i < this.length; i++) {
//         if (callback.call(thisArg, this[i], i, this)) newArray.push(this[i])
//     }
//     return newArray
// }

// const caro = produto => produto.preco >= 500
// const fragil = produto => produto.fragil
// let produtosCarosFrageis = produtos.filter2(caro).filter2(fragil)
// console.log(produtosCarosFrageis)