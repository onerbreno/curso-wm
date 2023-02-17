const { urlencoded } = require('express')
const express = require('express')
const app = express()

app.use(urlencoded({extended: true}))
app.post('/usuarios', (req, res) => {
    console.log(req.body)
    res.send('Parabéns')
})

app.listen(3003)