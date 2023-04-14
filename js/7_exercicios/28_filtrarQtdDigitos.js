function filtrarPorQuantidadeDeDigitos(array, digitos) {
    const a = 1

    return array.filter(numero => numero.toString().split('').length == digitos)
}

console.log(filtrarPorQuantidadeDeDigitos([2, 3, 10, 11, 23], 3))