/* 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor. */

function maiorMenor(vetor) {
  let maior
  let menor

  for (let i = 0; i < vetor.length; i++) {
    if (maior === undefined && menor === undefined){
      maior = vetor[i]
      menor = vetor[i]
    } else {
      if (vetor[i] > maior){
          maior = vetor[i]
      }
      if(vetor[i] < menor){
          menor = vetor[i]
      }
    }
  }

  console.log(`Maior: ${maior} \nMenor: ${menor}`)
}

vetor = [1, 2, 5, 7, 2, 10, 23, 55, 8]
maiorMenorValor(vetor)