// As funções call e apply são duas forma adicionais de se chamar uma função capazes de alterar o valor de THIS

// Usando call podemos utilizar o call para especificar o contexto de this do objeto article na função
const article = {
  title: 'Descomplicando call',
  language: 'JavaScript',
};

function print() {
  console.log(`${this.title} em ${this.language}.`);
}
print.call(article)




// Usando apply funciona exatamente como o método Call, porém seu segundo parâmetro recebe um Array dos parâmetros da função
function sumNumbers(firstNumber, secondNumber) {
	const sum =  this + firstNumber + secondNumber;

	console.log(sum)
}
sumNumbers.apply(5, [2, 7])