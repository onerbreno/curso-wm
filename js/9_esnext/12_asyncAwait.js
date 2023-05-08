// const http = require('http')

// const getTurma = letra => {
//     const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
//     return new Promise((resolve, reject) => {
//         http.get(url, res => {
//             let resultado = ''
            
//             res.on('data', dados => {
//                 resultado += dados
//             })
    
//             res.on('end', () => {
//                 try {
//                     resolve(JSON.parse(resultado))
//                 } catch(e) {
//                     reject(e)
//                 }
//             })
//         })
//     })
// }

// // Recurso do ES8
// // Objetivo de simplificar o uso de promises...
// const obterAlunos = async () => {
//     const turmaA = await getTurma('A')
//     const turmaB = await getTurma('B')
//     const turmaC = await getTurma('C')
//     return [].concat(turmaA, turmaB, turmaC)
// } // retorna um objeto AsyncFunction

// obterAlunos()
//     .then(alunos => alunos.map(a => a.nome))
//     .then(nomes => console.log(nomes))

// --------------------------------------------
    
// function esperarPor(tempo = 2000) {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(), tempo)
//     })
// }

// function retornarValor() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(10), 5000)
//     })
// }

// async function executar() {
//     let valor = await retornarValor() 

//     await esperarPor(1500)
//     console.log(`Async/Await ${valor}... `)
    
//     await esperarPor(1500)
//     console.log(`Async/Await ${valor + 1}... `)
    
//     await esperarPor(1500)
//     console.log(`Async/Await ${valor + 3}... `)

//     return valor + 3
// }

// async function codigoParalelo() {
//     await esperarPor(100)
//     console.log(`Código paralelo`)

// }


// // const valor = executar() // função com async retorna uma Promise
// // console.log(valor)
// executar().then(console.log)

// codigoParalelo() // promise não travam o código!

// --------------------------------------------

function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1) + min)
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch(e) {
        if(tentativas > 100) {
            throw "Não deu certo!"
        } else {
            return gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
}
gerarMegaSena(25)
    .then(console.log)
    .catch(console.log)