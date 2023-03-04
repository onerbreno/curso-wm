// 12) Faça um algoritmo que calcule o fatorial de um número.

const calculaFatorial = (num) => {
    let aux = 1;
    for (let i = num; i >= 1; i--) {
        aux *= i
        
    }
    return aux
}

console.log(calculaFatorial(5))