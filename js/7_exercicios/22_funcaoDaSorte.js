function sortearNumero(numero) {
    const numeroSorteado = Math.floor(Math.random() * 9) + 1
    return numeroSorteado === numero ? `Parabéns! O número sorteado foi ${numeroSorteado}` : `Que pena! O número sorteado foi ${numeroSorteado}` 
}

console.log(sortearNumero(10))
console.log(sortearNumero(2))