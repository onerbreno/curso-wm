// desestruturando um objeto
console.log("----------------------- desestruturando um objeto ")

const pessoa = { 
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { endereco: { logradouro, numero, cep }} = pessoa
console.log(logradouro, numero, cep)

const { sobrenome, casada = true } = pessoa
console.log(sobrenome, casada)


// desestruturando um array
console.log("----------------------- desestruturando um array ")


const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)


// desestruturando um OBJETO dentro de uma função
console.log("----------------------- desestruturando um OBJETO dentro de uma função ")

function randObj ({ min = 0, max = 1000 }) {
  const valor = Math.random () * (max - min) + min
                   
  return Math.floor(valor)
}

const obj = { 
  max: 50, 
  min: 40 
}

console.log(randObj(obj))

console.log(randObj({ min: 955 }))

console.log(randObj({}))
// console.log(rand())

        
// desestruturando um ARRAY dentro de uma função
console.log("----------------------- desestruturando um ARRAY dentro de uma função ")

function randArray ([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min]
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}
        
const array = [50, 40]
console.log(randArray(array))
console.log(randArray([992]))
console.log(randArray([, 10]))
console.log(randArray([]))