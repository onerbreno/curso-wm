// const http = require('http')

// const getTurma = letra => {
//     const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
//     return new Promise((resolve, reject) => {
//         http.get(url, res => {
//             let resultado = ''
            
//             // dados chegam de maneira parcial e por isso é necessário concatena-los
//             res.on('data', dados => { // evento de resposta disparado sempre que a resposta da requisição HTTP receber um pedaço de dados
//                 resultado += dados
//             })
    
//             res.on('end', () => { // evento de resposta concluída, disparado quando a resposta da requisição HTTP for completamente recebida
//                 try {
//                     resolve(JSON.parse(resultado))
//                 } catch(e) {
//                     reject(e)
//                 }
//             })
//         })
//     })
// }

// let nomes = []

// // getTurma('A').then(alunos => {
// //     nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
// //     getTurma('B').then(alunos => {
// //         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
// //         getTurma('C').then(alunos => {
// //             nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
// //             console.log(nomes)
// //         })
// //     })
// // })


// // recebe um array de Promises como parâmetro e retorna uma nova Promise
// Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
// // serve para executar várias Promises em paralelo e esperar que todas sejam concluídas 
//     .then(turmas => [].concat(...turmas))
//     .then(alunos => alunos.map(aluno => aluno.nome))
//     .then(nomes => console.log(nomes))
//     .catch(e => console.log(e.message))

// --------------------------------------------
// function esperarPor(tempo = 2000) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Executando promise...')
//             resolve()
//         }, tempo)
//     })
// }

// esperarPor()
//     .then(() => esperarPor())
//     .then(esperarPor)

// // --------------------------------------------
// function gerarNumerosEntre(min, max) {
//     if(min > max) {
//         [max, min] = [min, max]
//     }

//     return new Promise(resolve => {
//         const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
//         resolve(aleatorio)
//     })
// }

// gerarNumerosEntre(1, 60)
//     .then(num => num * 10)
//     .then(numX10 => `O número gerado foi ${numX10}`)
//     .then(console.log)

// --------------------------------------------
// function gerarNumerosEntre(min, max, tempo) {
//     if(min > max) [max, min] = [min, max]

//     return new Promise(resolve => {
//         setTimeout(() => {
//             const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
//             resolve(aleatorio)
//         }, tempo)
//     })
// }

// function gerarVariosNumeros() {
//     return Promise.all([
//         gerarNumerosEntre(1, 20, 2000),
//         gerarNumerosEntre(1, 69, 3000),
//         gerarNumerosEntre(1, 100, 4000),
//         gerarNumerosEntre(1, 5, 1500),
//     ])
// }

// console.time('promise')

// gerarVariosNumeros()
//     .then(numeros => console.log(numeros))
//     .then(() => {
//         // console.timeLog('promise')
//         console.timeEnd('promise')
//     })
// --------------------------------------------
// function funcionarOuNao(valor, chanceErro) {
//     return new Promise((resolve, reject) => {
//         try {
//             // con.log('temp')
//             if(Math.random() < chanceErro) {
//                 reject('Ocorreu um erro!')
//             } else {
//                 resolve(valor)
//             }
//         } catch(e) {
//             reject(e)
//         }
//     })
// }

// funcionarOuNao('Testando...', 0.5)
//     .then(v => `Valor: ${v}`)
//     .then(
//         v => consol.log(v),
//         err => console.log(`Erro Específico: ${err}`) // a segunda função no then é um tratamento específico de erro pra ele
//     )
//     .then(() => console.log('Quase fim!'))
//     .catch(err => console.log(`Erro geral: ${err}`))
//     .then(() => console.log('Fim!'))

