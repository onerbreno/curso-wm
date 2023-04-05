function calcularDespesas(produtos) {
    const precos = produtos.map(produto => produto.preco)
    const despesasTotais = precos.reduce((contador, elemento) => contador += elemento)
    return despesasTotais
}

const despesasTotais = ([
    {
        nome: "Jornal online",
        categoria: "Informação",
        preco: 89.99
    },
    {
        nome: "Cinema",
        categoria: "Entretenimento",
        preco: 150
    }
])

console.log(calcularDespesas(despesasTotais))