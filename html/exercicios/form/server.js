const { urlencoded } = require('express')
const express = require('express')
const app = express()

app.use(urlencoded({extended: true}))
app.post('/usuarios', (req, res) => {
    console.log(req.body)
    // console.log(req.query) no metódo get os dados vem na query string
    res.send('Parabéns, usuário incluído')
})
app.post('/usuarios/:id', (req, res) => {
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabéns, usuário alterado</h1>')
})

app.listen(3003)