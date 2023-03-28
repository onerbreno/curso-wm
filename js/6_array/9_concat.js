const filhas = ['Valeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos, 'Fulano')
console.log(todos)

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]]))

// simulando concat
// Array.prototype.concat2 = function(...elementos) {
//     const string = elementos.toString().split(',')

//     const newArray = this
//     newArray.push(...string)
//     return newArray
// }
// const filhas = ['Valeskah', 'Cibalena']
// const filhos = ['Uoxiton', 'Uesclei']
// const todos = filhas.concat2(filhos, 'Fulano')
// console.log(todos)
