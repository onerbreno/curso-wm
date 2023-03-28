const alunos = [
    { nome: 'João', nota: 8.9},
    { nome: 'Maria', nota: 7.9}
]

// imperativo: como deve ser feito?
// É como dar instruções a um assistente pessoal, onde você precisa explicar 
// exatamente o que deve ser feito em cada passo do caminho.
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota;
}
console.log(total1 / alunos.length)

// declarativo: o que deve ser feito?
// É como dar uma lista de compras ao supermercado, 
// sem se preocupar com como as coisas serão encontradas e organizadas.
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2)