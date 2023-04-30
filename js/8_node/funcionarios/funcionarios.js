const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const getMulheresChinesas = funcionario => funcionario.genero == 'F' && funcionario.pais == 'China'
const getMenorSalario = (contador, atual) => contador.salario < atual.salario ? contador : atual

axios.get(url).then(response => {
    const funcionarios = response.data

    // melhor chinesa com menor salário
    const mulherChinesaMenorSalario = funcionarios.filter(getChineseWomen).reduce(getMenorSalario)

    console.log(mulherChinesaMenorSalario)
})