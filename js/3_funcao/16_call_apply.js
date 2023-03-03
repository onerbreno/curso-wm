// As funções call e apply, assim como bind, são duas formas de se chamar uma função capazes de alterar o valor de THIS

const carro = {
  preco: 49990,
  desc: 0.20
}
console.log("bind -------------------")
const usandoBind = getPreco.bind(carro, 0.15, "$") // bind se parece muito com o call, porem ele apenas retorna a nova função apontando a referência do this, a função NÃO é executada imediatamente

console.log(usandoBind()) // executando a nova função

console.log("call -------------------")
console.log(getPreco.call(carro, 0.30, "€")) // call e apply executam a função imediatamente

console.log("apply ------------------")
console.log(getPreco.apply(carro, [0.20, "£"])) // apply permite a passagem de argumento via array











// Podemos utilizar o call para especificar o contexto de this do objeto article na função
const article = {
  title: 'Descomplicando call',
  language: 'JavaScript',
};
function print() {
  console.log(`${this.title} em ${this.language}.`);
}
print.call(article)


// // Usando apply funciona exatamente como o método Call, porém seu segundo parâmetro recebe um Array dos parâmetros da função
function sumNumbers(firstNumber, secondNumber) {
	const sum =  this + firstNumber + secondNumber;

	console.log(sum)
}
sumNumbers.apply(5, [2, 7])

function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${(this.preco * (1 - this.desc) * (1 + imposto)).toFixed()}`
}

// const produto = {
//   nome: 'Notebook',
//   preco: 4589,
//   desc: 0.15,
//   getPreco
// }

// global.preco = 20
// global.desc = 0.1
// console.log(getPreco())
// console.log(produto.getPreco())




