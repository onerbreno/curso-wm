const a = {
    name: 'John Doe'
}
const b = a
b.name = 'Jane Doe'
console.log(a)
console.log(b)


const d1 = new Date(0)
const d2 = new Date(0)

// Compara os endereços de memória
console.log(d1 == d2) 
console.log(d1 === d2) 

// Estrategia para comparar o conteúdo
console.log(JSON.stringify(d1) == JSON.stringify(d2))