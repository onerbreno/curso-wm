/* 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

function paresImpares(vetorNumeros) {
  let qtdPares = 0
  let qtdImpares = 0

  for (let i = 0; i < vetorNumeros.length; i++) {
    if (vetorNumeros[i] % 2 == 0) {
      qtdPares++
    } else {
      qtdImpares++
    }
  }

  console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}

vetor = [1, 2, 5, 7, 2, 10, 23, 55, 8]
paresImpares(vetor)