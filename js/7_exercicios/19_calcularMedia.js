const calcularMedia = array => {
    // array.reduce((contador, elemento) => contador += elemento) / array.length
    const soma = array.reduce((contador, elemento) => contador += elemento, 0)
    const media = soma / array.length
    return media
}
console.log(calcularMedia([10, 0]))
console.log(calcularMedia([]))
console.log(calcularMedia([1, 2, 3, 4, 5]))