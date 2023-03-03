// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. 
// A função deverá imprimir o resultado e o resto da divisão destes dois valores.

const calcularDivisaoResto = (dividendo, divisor) => {
    const resultadoDivisao = dividendo / divisor
    const resto = dividendo % divisor
    console.log(`Resultado da divisão: ${resultadoDivisao}`)
    console.log(`Resto: ${resto}`)
}

calcularDivisaoResto(10, 5)