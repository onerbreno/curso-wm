// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function verificarPares(vetor) {
    let pares = 0
    vetor.forEach(element => element % 2 == 0 ? pares++ : pares);
    return pares
}

const vet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(verificarPares(vet))