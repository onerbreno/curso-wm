const porta = 3003

const express = require('express')
const bancoDeDados = require('./bancoDeDados')
const app = express()

// app.use((req, res, next) => { // use é um middleware que atende qualquer requisição
//     res.send({ nome: 'Notebook', preco: 123.45}) // send converte automaticamente para JSON
// })

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...')
//     next()
// })

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) 
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) 
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) 
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) 
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) 
})


app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})