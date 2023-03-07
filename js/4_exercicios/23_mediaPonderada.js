// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média 
// ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas 
// restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem 
// "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. 
// Repita a operação até que o código lido seja negativo.

const calcularMediaPonderada = (codigo, nota1, nota2, nota3) => {
    const maiorNota = Math.max(nota1, nota2, nota3)
    const mediaPonderada = ((maiorNota * 4) + (nota1 + nota2 + nota3) * 3) / 10;

    console.log(`Código do aluno: ${codigo}\n`)
    console.log(`Notas: ${nota1} ${nota2} ${nota3}`)
    console.log(`Média: ${mediaPonderada}`)
    if (mediaPonderada >= 5) {
        console.log(`\nStatus: Aprovado.`)
        } else {
        console.log(`\nStatus: Reprovado`)
    }
}

calcularMediaPonderada(123, 6, 5, 5)