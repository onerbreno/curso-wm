// estrutura chave-valor(estrutura de dados abstrata) usada principalmente para pesquisar e procurar dados rapidamente

const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

console.log(tecnologias.react)

// pegar elemento de um map
console.log(tecnologias.get('react').framework)

// aceitar qualquer tipo de dado como chave
// criando map a partir de uma array
const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

console.log(typeof chavesVariadas[Symbol.iterator]) // Map é iterável por padrão

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
})

// verificar se há determinado elemento
console.log(chavesVariadas.has(123))

// deletar elemento
chavesVariadas.delete(123) // true em caso de sucesso e false se o elemento não existir
console.log(chavesVariadas.has(123))

// verificar tamanho 
console.log(chavesVariadas.size)

// não aceita repetições de chave
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)