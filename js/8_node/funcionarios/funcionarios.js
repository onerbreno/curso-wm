const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const teste1 = Object.entries(funcionarios)

    console.log(teste1.map(elemento => elemento[1]).filter(elemento => elemento.genero == 'F' && elemento.pais == 'China'))
})