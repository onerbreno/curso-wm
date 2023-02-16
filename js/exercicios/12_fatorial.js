/* Faça um algoritmo que calcule o fatorial de um número. */

function fatorial(valor){
  let contador = 1
  for(let i = valor; i > 1; i--){
    contador *= i
  }
return contador
}
console.log(fatorial(5))