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

// Inicia o servidor na porta 8080
app.listen(8080, () => console.log('Executando...'))
