const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// aplica uma função callback sobre cada elemento do próprio array
// ou seja, ele não retorna outro array mas transforma diretamente o que foi passado 

aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)

aprovados.forEach(exibirAprovados)


// simulando o forEach
// Array.prototype.forEach2 = function(callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this)
//     }
// }

// aprovados.forEach2(function(nome, indice, array) {
//         console.log(`${indice + 1}) ${nome}`)
//         console.log(array)
//     })
