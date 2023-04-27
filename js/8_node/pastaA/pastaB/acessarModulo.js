// import de outro arquivo
const moduloA = require('../../moduloA') // respeitar o nome do arquivo (letras minusculas, maiúsculas)
// windows e mac não é case sensitive, entretanto linux é 

// const moduloA = require('/Users/Breno/Desktop/www/curso-wm/js/8_node/moduloA.js') 
// const moduloA = require('/Users/Breno/Desktop/www/curso-wm/js/8_node/moduloA') 

console.log(moduloA.ola)


// import de um module instalado no node
// criei o modulo "saudacao" dentro de node_modules (não fazer isso)
// o node procura o arquivo "index.js" dentro da pasta do modulo em node_modules
const saudacao = require('saudacao')
console.log(saudacao.ola)

// nesse caso ele também procura o arquivo "index.js" dentro da pasta
const c = require('./pastaC')
console.log(c.ola2)

// import de module core do node
// const http = require('http')
// http.createServer((req, res) => {
//     res.write('Bom dia!')
//     res.end()
// }).listen(8080)
