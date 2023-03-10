// 05) Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); 
// O resultado será: 0.30000000000000004. 

// Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice 
// versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta.

// Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e 
// retorne R$0,30 (observe a vírgula e o ponto).

function formatarNumero(n1) {
    const numeroFormatado = n1.toFixed(2).replace('.', ",")
    return `R$ ${numeroFormatado}`
}

console.log(formatarNumero(0.1 + 0.2))
console.log(formatarNumero(0.400000005))