function receberMelhorEstudante(obj) {
    const notasEstudantes = Object.values(obj)
    const mediaNotas = notasEstudantes.map(array => array.reduce((acumulador, atual) => acumulador += atual) / array.length)
    return mediaNotas.reduce((acumulador, atual, i, array) => {
        // console.log(i)
        // console.log(array[i])
        acumulador = i
        console.log(array[acumulador+1])
        return array[acumulador] > array[acumulador+1] ? acumulador : acumulador
    }, 0)
}
const estudantes = {
    joao: [10, 10, 10, 10],
    maria: [10, 6, 7, 10],
    paula: [10, 4, 6, 8]
}

console.log(receberMelhorEstudante(estudantes))