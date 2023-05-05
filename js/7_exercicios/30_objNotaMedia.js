function receberMelhorEstudante(obj) {
    const notasEstudantes = Object.values(obj)
    const mediaNotas = notasEstudantes.map(array => array.reduce((acumulador, atual) => acumulador += atual) / array.length)
    const media = Math.max(...mediaNotas)
    const nome = Object.keys(obj)[mediaNotas.indexOf(media)]
    return {
        nome,
        media
    }

}
const estudantes = {
    joao: [10, 10, 10, 10],
    maria: [10, 6, 7, 10],
    paula: [10, 4, 6, 8]
}

console.log(receberMelhorEstudante(estudantes))

const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length
function recerberMelhorEstudante(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map( estudante => {
        const chave = 0,
        valor = 1
        return { nome: estudante[chave], media: media(estudante[valor]) }
    })
    const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
    const melhorEstudante = estudantesOrdenados[0]

    return melhorEstudante

}