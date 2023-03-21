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

aprovados.sort() // reordena e altera o array original
console.log(aprovados)

delete aprovados[1] // o array não é reordenado, o delete substituí a posição especificada por undefined
console.log(aprovados[1])

aprovados = ['Bia', 'Carlos', 'Ana'] 

// dependendo dos parâmetros o splice pode excluir e/ou adicionar elementos
// aprovados.splice(1, 2, 'Elemento1', 'Elemento2') 
// 1º parâmetro é o índice de referência
// 2º parâmetro é a qtd de elementos que serão excluídos
// os próximos parâmetros são os elementos que serão adicionados


aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // nesse caso ele não excluí nenhum elemento
// apenas adiciona a partir do índice especificado

console.log(aprovados)