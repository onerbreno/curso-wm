// Criando uma Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A' };
const pai1 = { __proto__: avo, attr2: 'B', attr3: '3' } // Forma literal de setar herança
const filho = { __proto__: pai1, attr3: 'C' }

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); // undefined A B C

Object.prototype.attr0 = 0; // Não faça isso em casa!
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); // 0 A B C

// Outro exemplo de setar herança 
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
          if (this.velAtual + delta <= this.velMax) {
              this.velAtual += delta;
          } else {
              this.velAtual = this.velMax;
          }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`;
    }
}

const ferrari2 = {
    modelo: 'F40',
    velMax: 324, // shadowing (sombreamento do atributo do pai)

}

const volvo2 = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`;
    }
}

Object.setPrototypeOf(ferrari2, carro); // Função para setar herança
Object.setPrototypeOf(volvo2, carro);

console.log(ferrari2); 
console.log(volvo2);

volvo2.acelerarMais(100);
console.log(volvo2.status());

ferrari2.acelerarMais(300);
console.log(ferrari2.status());


console.log('------------------------------')

// Outro exemplo de herança
// Object.keys() e For In -> herança
const pai2 = { nome: 'Pedro', corCabelo: 'preto' }
const filha1 = Object.create(pai2)
filha1.nome = 'Ana';
console.log(filha1.corCabelo); // preto

const filha2 = Object.create(pai2, { // função aceita com primeiro parametro quem é pai, seguido pelas caracteríscas desse novo objeto
    nome: {
        value: 'Bia',
        writable: false,
        enumerable: true
    }
});

console.log(filha2.nome)
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1)); // Object.keys() por padrão retorna apenas os atributos e comportamentos declarados no objeto, sem listar os herdados
console.log(Object.keys(filha2));

for (let key in filha2) { // Com o For In é listado tanto os atributos e métodos do objeto filho quanto do objeto pai

    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`por herança: ${key}`); // hasOwnProperty() conseguimos testar se um atributo ou método pertence ao próprio objeto, caso falso, é recebido por herança.
}



// prototype != __proto__

console.log('------------------------------')
function MeuObjeto() {}

console.log(MeuObjeto.prototype); 

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;
console.log(obj1.__proto__ === obj2.__proto__); // true
console.log(MeuObjeto.prototype === obj1.__proto__); // true

MeuObjeto.prototype.nome = 'Anônimo'; // prototype: Pertence a função construtora e serve para adicionar comportamentos a ela depois de criada
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`);
}
obj1.falar();
obj2.nome = 'Rafael';
obj2.falar();

const obj3 = {};
obj3.__proto__ = MeuObjeto.prototype; // __proto__: Pertence a instância e é uma referência ao objeto-pai.
obj3.nome = "Obj3";
obj3.falar();




console.log('------------------------------')
// Com o conceito de protótipo e herança podemos criar novos comportamentos em funções construturoras da própria API
console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

console.log('Escola Cod3r'.reverse());

Array.prototype.first = function () {
    return this[0];
}

console.log([1, 2, 3, 4, 5].first());
console.log(['a', 'b', 'c'].first());

String.prototype.toString = function () {
    return 'Lascou tudo!';
}

console.log('Escola Cod3r'.reverse());




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