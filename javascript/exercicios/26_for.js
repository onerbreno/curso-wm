/* 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações. */

function quantosDentro (vetorNumeros) {
  let qtdDentro = 0
  let qtdFora = 0
  for (let i = 0; i < vetorNumeros.length; i++) {
    if (vetorNumeros[i] >= 10 && vetorNumeros[i] <=20) {
      qtdDentro++
    } else {
      qtdFora++
    }
  }
  console.log(`${qtdDentro} números dentro do intervalo e ${qtdFora} números fora do intervalo.`)
}

quantosDentro([10, 14, 15, 18, 20, 23, 1])