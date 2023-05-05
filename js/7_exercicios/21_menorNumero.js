function menorNumero(array) {
    return array.reduce((menor, elemento) => menor > elemento ? elemento : menor)
    // return Math.min(...numeros);
}

console.log(menorNumero([0, 1, 2, 3, 4]))
console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))