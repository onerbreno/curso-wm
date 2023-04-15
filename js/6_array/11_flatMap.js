const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.1
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.1
    }, {
        nome: 'Roberto',
        nota: 9.1
    }]
}]
const getNotasAlunos = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotasAlunos)

const notas = escola.map(getNotasTurma)
console.log(notas)

console.log([].concat([ 8.1, 9.1 ], [ 8.1, 9.1 ]))

const notas1 = escola.flatMap(getNotasTurma)
console.log(notas1)

// Simulando flatMap
Array.prototype.flatMap2 = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap2(getNotasTurma)
console.log(notas1)
