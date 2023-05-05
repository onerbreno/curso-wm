// tagged templater - precessa o template dentro de uma função
// podemos passar uma string para uma função que irá processá-la antes de retorná-la
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}`)
console.log(`${aluno} está ${situacao}`)

function real(partes, ...valores) {
    const resultado = []

    // valores.forEach((valor, indice) => {
    //     valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
    //     resultado.push(partes[indice], valor)
    // })

    partes.forEach((parte, indice) => {
        let valor = isNaN(valores[indice]) ? valores[indice] : `R$${valores[indice].toFixed(2)}`
        resultado.push(parte, valor)
    })

    return resultado.join('')
}

const preco = 29.99
const precoParcela = 9.99
const precoTest = 9.99
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)