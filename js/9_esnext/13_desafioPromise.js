const fs = require('fs')
const path = require('path')


function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            fs.readFile(caminho, function(_, conteudo) {
                resolve(conteudo.toString())
            })
            console.log('Depois de ler')
        } catch(e) {
            reject(e)
        }
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(console.log)
    .catch(e => console.log(e.message))
