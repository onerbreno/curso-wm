function filtrarPorQuantidadeDeDigitos(array, digitos) {
    // return array.filter(numero => numero.toString().length == digitos)
    return array.filter(numero => String(numero).length == digitos) // String() é uma abordagem mais flexível
    // String() aceita todos os tipos de dados
}

console.log(filtrarPorQuantidadeDeDigitos([2, 3, 10, 11, 23], 2))