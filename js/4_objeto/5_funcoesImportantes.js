const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

// Object.keys retorna todas as chaves do objeto em formato de array
console.log(Object.keys(pessoa));

// Object.values retorna todas os valores do objeto em formato de array
console.log(Object.values(pessoa)); 

// Object.entries retorna todas as chaves e valores de um objeto em formato de array
console.log(Object.entries(pessoa));

//
Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true, // para aparecer nos métodos keys, values, entries, ...
  writable: false, // funciona como o Object.freeze
  value: '01/01/2019'
});

pessoa.dataNascimento = '01/01/2021';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

/*
*  Object.assign (ECMAScript 2015)
*  O primeiro parametro é objeto que será acrescido dos elementos dos demais objetos passados como parametro
*/

const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
console.log('dest', dest);
console.log('o1', o1);
console.log('o2', o2);
console.log('obj', obj);

// Com o Object.freeze o objeto não permitirá qualquer alteração
Object.freeze(obj);
obj.c = 1234;
console.log(obj);