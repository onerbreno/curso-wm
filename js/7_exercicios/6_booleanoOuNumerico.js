function converteParaInverso(valor) {
    let valorConvertido
    if(typeof valor === 'boolean') {
        valorConvertido = !valor
    } else if (typeof valor === 'number') {
        valorConvertido = -valor
    } else {
        return `Booleano ou número esperados, o parâmetro é do tipo ${typeof valor}`
    }

    return valorConvertido
}

console.log(converteParaInverso(-2))
console.log(converteParaInverso(2))
console.log(converteParaInverso(10))
console.log(converteParaInverso('10'))
