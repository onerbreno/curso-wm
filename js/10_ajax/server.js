const express = require('express')
const app = express()

// Define o diretório raiz para servir os arquivos estáticos
app.use(express.static('.'))

// Define um middleware para tratar os dados enviados através de formulários
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Importa o módulo multer para lidar com uploads de arquivos
const multer = require('multer')

// Configura o multer para armazenar os arquivos no diretório './upload'
const storage = multer.diskStorage({
    destination (req, file, callback) {
        callback(null, './upload')
    },
    filename (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

// Cria um middleware do multer para tratar um único arquivo enviado através do campo "arquivo" do formulário
const upload = multer({ storage }).single('arquivo')

// Define o endpoint POST "/upload" para receber um arquivo
app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

// Rota POST '/formulario'
app.post('/formulario', (req, res) => {
    res.send({
        ...req.body, // Retorna os dados recebidos no corpo da solicitação
        id: 1 // Adiciona uma propriedade "id" com o valor 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // formas de receber dados do frontend
    // req.body -> corpo da requisição
    // req.query -> /parOuImpar?numero=3
    // req.params -> /parOuImpar/3
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})
  
// Inicia o servidor na porta 8080
app.listen(8080, () => console.log('Executando...'))
