/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */


const calc = function (n1, n2) {
  console.log(`Soma: ${n1 + n2}`)
  console.log(`Sub: ${n1 - n2}`)
  console.log(`Mult: ${n1 * n2}`)
  console.log(`Div: ${n1 / n2}`)
}

calc(2, 4)