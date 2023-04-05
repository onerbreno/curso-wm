function somarNumeros(array) {
    const soma = array.reduce((acumulador, elemento) => acumulador += elemento)
    return soma
}

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))