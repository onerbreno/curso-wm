// import de outro arquivo
const moduloA = require('../../moduloA') // respeitar o nome do arquivo
// windows e mac não é case sensitive, entretanto linux é 
console.log(moduloA.ola)


// import de um module instalado no node
// o node procura o arquivo "index.js" dentro da pasta do modulo em node_modules
const saudacao = require('saudacao')
console.log(saudacao.ola)

// import de module core do node
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)
