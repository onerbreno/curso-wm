const fs = require('fs') // o node procura primeiro nos módulos nativos, se não encontrar, procura no node_modules

const caminho = __dirname + '/arquivo.json'

// síncrono...
// abordagem prejudicial no caso de arquivos grandes, pois o event loop é travado
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo)

// assíncrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// leitura de um json, especificamente, é muito mais fácil
const config = require('./arquivo.json') // é necessário passar a extensão, pois o default (sem extensão) são arquivos js
console.log(config.db)

// leitura de pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})