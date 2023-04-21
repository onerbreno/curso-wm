function receberMelhorEstudante(obj) {
    const notasEstudantes = Object.values(obj)
    const mediaNotas = notasEstudantes.map(array => array.reduce((acumulador, atual) => acumulador += atual) / array.length)
    const nome = Object.keys(obj)[mediaNotas.indexOf(Math.max(...mediaNotas))]
    const media = Math.max(...mediaNotas)
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