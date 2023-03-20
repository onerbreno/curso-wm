console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana') // forma menos usual de declarar array

aprovados = ['Bia', 'Carlos', 'Ana'] // forma mais usual

aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael' // possições anteriores que estão vazias são alocadas como undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

console.log(aprovados)

aprovados.sort() // altera o array original
console.log(aprovados)

delete aprovados[1] // o array não é reordenado, delete substituí a possição especificada por undefined
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana'] 
aprovados.splice() // dependendo dos parâmetros ele pode excluir e/ou adicionar elementos