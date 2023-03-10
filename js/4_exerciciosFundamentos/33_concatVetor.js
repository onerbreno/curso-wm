// 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes 
// vetores deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo 
// com strings e o terceiro com valores decimais. Declarados os vetores, utilize a função 
// de união concat() de duas maneiras diferentes para unir os vetores, e mostre o resultado 
// no console. Todos os elementos do vetor resultado deverão aparecer no console.

const vetorInteiro = [1, 2, 3, 4]
const vetorString = ['a', 'b', 'c', 'd']
const vetorDouble = [1.1, 1.2, 1.3, 1.4]

let intDouble = vetorInteiro.concat(vetorDouble);
let intString = vetorInteiro.concat(vetorString);

console.log(intDouble)
console.log(intString)

let resultadoConcat2 = [].concat(vetorInteiro, vetorString, vetorDouble);
console.log(resultadoConcat2);