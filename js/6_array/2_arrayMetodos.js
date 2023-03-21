const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // remove o último elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um elemento ao final do array
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona um elemento na primeira posição 
console.log(pilotos)

// splice pode adicionar e/ou remover elementos
pilotos.splice(2, 0, 'Bottas', 'Massa') // adiciona novos elementos a partir da posição 2
console.log(pilotos)

pilotos.splice(3, 1) // remove apenas 1 elemento a partir da posição 3
console.log(pilotos)

pilotos.splice(3, 1, "Norris") // remove apenas 1 elemento a partir da posição 3 e adiciona 1 novo elemento
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array, nesse caso com todos os 
// elementos a partir da posição 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // retorna um novo array, nesse caso com todos os 
// elementos a partir da posição 1 até a posição 3

// não seria até a posição 4? sim, porem a última posição é desconsiderada (intervalo semiaberto)

console.log(algunsPilotos2)