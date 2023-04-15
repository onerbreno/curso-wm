// Utilizado em arrays e strings para verificar se um determinado valor está presente
// retorna um booleano

// O primeiro parâmetro é o valor que você deseja procurar e o segundo parâmetro é opcional e define a posição a partir da qual a busca deve começar.

const string = 'onerbreno'
const array = [1, 2, 3, 4, 5]

console.log(string.includes('breno'))
console.log(string.includes('onerb', 4)) // procura a partir da posição 4, não encontra

console.log(array.includes(3))
console.log(array.includes(3, 3)) // procura a partir da posição 3, não encontra