// Object.preventExtensions evita que seja adicionado novos atributos
const produto = Object.preventExtensions({ nome: 'Qualquer', preco: 1.99, tag: 'promoção' })
console.log(Object.isExtensible(produto))

produto.nome = "borracha"
produto.descricao = 'Borracha escolar'
delete produto.tag
console.log(produto)

// Object.seal evita que seja adicionado e deletado atributos
const pessoa = { nome: 'Julia', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze evita que seja modificado, adicionado e deletado atributos
Object.freeze(obj);
obj.c = 1234;
console.log(obj);
