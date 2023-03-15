// // Entendendo prototype
// const ferrari = {
//     modelo: 'F40',
//     velMax: 324
    
// }
// const volvo = {
//     modelo: 'V40',
//     velMax: 200
// }
// console.log(ferrari.prototype) // apenas funções tem o atributo prototype
// console.log(ferrari.__proto__)
// console.log(ferrari.__proto__)
// console.log(ferrari.__proto__ == Object.prototype)
// console.log(volvo.__proto__ == Object.prototype)
// console.log(Object.prototype.__proto__)

// function MeuObjeto() {}
// console.log(typeof Object, typeof MeuObjeto)
// console.log(Object.prototype, MeuObjeto.prototype)

// // -----------------------------------------------------------------------
// // Criando uma Cadeia de protótipos (prototype chain)
// const avo = { 
//     attr1: 'A' 
// }

// const pai1 = { 
//     __proto__: avo, // Forma literal de setar herança
//     attr2: 'B', 
//     attr3: '3'
// } 

// const filho = { 
//     __proto__: pai1, 
//     attr3: 'C' 
// }

// console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); // undefined A B C
// Object.prototype.attr0 = 0; // Não faça isso em casa!
// console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); // 0 A B C

// // Outro exemplo de setar herança 
// const carro = {
//     velAtual: 0,
//     velMax: 200,
//     acelerarMais(delta) {
//           if (this.velAtual + delta <= this.velMax) {
//               this.velAtual += delta;
//           } else {
//               this.velAtual = this.velMax;
//           }
//     },
//     status() {
//         return `${this.velAtual} Km/h de ${this.velMax} Km/h`;
//     }
// }

// const ferrari2 = {
//     modelo: 'F40',
//     velMax: 324, // shadowing (sombreamento do atributo do pai)

// }

// const volvo2 = {
//     modelo: 'V40',
//     status() {
//         return `${this.modelo}: ${super.status()}`;
//     }
// }

// Object.setPrototypeOf(ferrari2, carro); // Função para setar herança, equivalente a 
// // adicionar a propriedade __proto__ apontando para o objeto pai

// Object.setPrototypeOf(volvo2, carro);

// console.log(ferrari2); 
// console.log(volvo2); // ao chamar o objeto convertido para string são lidos 
// // apenas os atributos e funções que pertencem ao próprio objeto

// volvo2.acelerarMais(100);
// console.log(volvo2.status());

// ferrari2.acelerarMais(300);
// console.log(ferrari2.status());

// console.log('------------------------------')

// // -----------------------------------------------------------------------

// // Outro exemplo de herança
// const pai = { nome: 'Pedro', corCabelo: 'preto' }
// const filha1 = Object.create(pai)
// filha1.nome = 'Ana';
// console.log(filha1.corCabelo); // preto

// const filha2 = Object.create(pai, { // função aceita com primeiro parâmetro quem é o 
// // objeto pai, seguido pelos atributos desse novo objeto
//     nome: {
//         value: 'Bia',
//         writable: false,
//         enumerable: true
//     }
// });

// console.log(filha2.nome)
// filha2.nome = 'Carla';
// console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

// console.log(Object.keys(filha1)); // Object.keys() por padrão retorna apenas os atributos e comportamentos 
// // declarados no objeto, sem listar os herdados
// console.log(Object.keys(filha2));

// for (let key in filha2) { // Com o For In é listado tanto os atributos e métodos do objeto filho quanto do objeto pai
//     // hasOwnProperty() conseguimos testar se um atributo ou método pertence ao próprio objeto, caso falso, é recebido por herança.
//     filha2.hasOwnProperty(key) ? console.log(key) : console.log(`por herança: ${key}`); 
// }



// // prototype != __proto__

// console.log('------------------------------')

// function MeuObjeto() {}
// console.log(MeuObjeto.prototype); 

// const obj1 = new MeuObjeto;
// const obj2 = new MeuObjeto;
// console.log(obj1.__proto__ === obj2.__proto__); // true
// console.log(MeuObjeto.prototype === obj1.__proto__); // true


// MeuObjeto.prototype.nome = 'Anônimo';
// MeuObjeto.prototype.falar = function() {
//     console.log(`Bom dia! Meu nome é ${this.nome}`);
// }

// obj1.falar();
// obj2.nome = 'Rafael';
// obj2.falar();

// const obj3 = {};
// obj3.__proto__ = MeuObjeto.prototype; // __proto__: Pertence a instância e é uma referência ao objeto-pai.
// obj3.nome = "Obj3";
// obj3.falar();


// // Resumindo a loucura
// console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
// console.log(MeuObjeto.__proto__ === Function.prototype)
// console.log(Function.prototype.__proto__ === Object.prototype)

// console.log('------------------------------')
// // Com o conceito de protótipo e herança podemos criar novos comportamentos em funções construturoras da própria API
// console.log(typeof String);
// console.log(typeof Array);
// console.log(typeof Object);

// String.prototype.reverse = function () {
//     return this.split('').reverse().join('');
// }

// console.log('Escola Cod3r'.reverse());

// Array.prototype.first = function () {
//     return this[0];
// }

// console.log([1, 2, 3, 4, 5].first());
// console.log(['a', 'b', 'c'].first());

// String.prototype.toString = function () {
//     return 'Lascou tudo!'; // Não substitua comportamentos que já existam de maneira global
// }

// console.log('Escola Cod3r'.reverse());




console.log('------------------------------')
// Com o conceito de protótipo e herança podemos simular também o NEW
function Aula(nome, videoId) {
  this.nome = nome;
  this.videoId = videoId;
}

const aula1 = new Aula('Vem Vindo', 123);
const aula2 = new Aula('Até Breve', 456);
console.log(aula1, aula2);

// simulando o new
function novo(f, ...params) {
  const obj = {};
  obj.__proto__ = f.prototype;
  f.apply(obj, params);
  return obj;
}

const aula3 = novo(Aula, 'Bem Vindo', 123);
const aula4 = novo(Aula, 'Até Breve', 456);
console.log(aula3, aula4);