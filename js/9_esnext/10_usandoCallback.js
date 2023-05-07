// exercício para entender a motivação para o uso de promises
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''
        
        // dados chegam de maneira parcial e por isso é necessário concatena-los
        res.on('data', dados => { // evento de resposta
            resultado += dados
        })

        res.on('end', () => { // evento de resposta concluída
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []

// Callback hell
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})


setTimeout(() => {
    console.log('Executando callback...')
    setTimeout(() => {
        console.log('Executando callback...')
        setTimeout(() => {
            console.log('Executando callback...')
        }, 2000)
    }, 2000)
}, 2000)

