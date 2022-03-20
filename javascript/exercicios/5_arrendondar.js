/* Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto). */

function arredondar(valor) {
  console.log(`R$ ${valor.toFixed(2).toString().replace(".", ",")}`)
}

arredondar(0.234234234)