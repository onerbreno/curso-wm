// Set() é uma estrutura que não aceita repetição e não é indexada
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Coringthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)
console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

// não há índices para os elementos, mas você pode iterar na ordem em que eles foram inseridos
for (const item of times) {
    console.log(item);
}

// criando set a partir de um array
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)

nomes.forEach(item => {
    console.log(item);
});

// exemplo de uso

function segundoMaior(array) {
    const sortedArray = array.sort((a, b) => b - a);
    const uniqueSortedArray = [...new Set(sortedArray)]; // spread do return de new Set(sortedArray)
    // Set() permite armazenar valores únicos e resolver o problema
    
    if (uniqueSortedArray.length < 2) {
      return null;
    }
    
    return uniqueSortedArray[1];
}

console.log(segundoMaior([12, 16, 1, 5]))