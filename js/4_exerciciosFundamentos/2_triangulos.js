// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. 
// Isósceles: Dois lados iguais. 
// Escaleno: Todos os lados são diferentes.

// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua 
// classificação quanto ao tamanho de seus lados. 
// (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

function classificarTriangulo(lado1, lado2, lado3) {
    let tipoTriangulo = 'Escaleno'
    if (lado1 == lado2 && lado2 == lado3) { 
        tipoTriangulo = "Equilátero"
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        tipoTriangulo = "Isósceles"
    }


    return tipoTriangulo
}

console.log(classificarTriangulo(1, 2, 3))

console.log(classificarTriangulo(2, 2, 3))
console.log(classificarTriangulo(2, 3, 3))

console.log(classificarTriangulo(3, 3, 3))


