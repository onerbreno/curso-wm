/* 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */


function caixaEletronico (valor) {
  let qtd100, qtd50, qtd10, qtd1, resto

  qtd100 = parseInt(valor / 100)
  console.log(`Notas de 100: ${qtd100}`)
  
  resto = parseInt(valor % 100)
  qtd50 = parseInt(resto / 50)
  console.log(`Notas de 50: ${qtd50}`)

  resto = parseInt(resto % 50)
  qtd10 = parseInt(resto / 10)
  console.log(`Notas de 10: ${qtd10}`)

  resto = parseInt(resto % 10)
  qtd5 = parseInt(resto / 5)
  console.log(`Notas de 5: ${qtd5}`)

  console.log(`Notas de 1: ${parseInt(resto % 5)}`)
}

caixaEletronico(1254)
console.log("--------------------")
caixaEletronico(273)
console.log("--------------------")
caixaEletronico(134)