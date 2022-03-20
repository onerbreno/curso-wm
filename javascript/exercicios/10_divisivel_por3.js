/* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false. */

function verificaNumero (num) {
  return !(num % 3)
}

console.log(verificaNumero(1))
console.log(verificaNumero(3))
console.log(verificaNumero(20))
console.log(verificaNumero(150))