/* 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
o valor do elemento for maior que 5.
 */

function mulplicacao (vetor, num) {
  let resultado = []
  for (let i = 0; i < vetor.length; i++) {
    resultado.push(vetor[i] * num)
  }
  return resultado
}

console.log(mulplicacao([2, 3, 4, 5, 6], 5))

function mulplicacaoMaior5 (vetor, num) {
  let resultado = []
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > 5) {
      resultado.push(vetor[i] * num)
    }
  }
  return resultado
}

console.log(mulplicacaoMaior5([2, 3, 4, 8, 6], 5))