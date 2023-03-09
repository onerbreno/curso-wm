// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento 
// anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança 
// menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para 
// as unidades de medida.

const calcularCrescimento = (altura1, altura2, taxa1, taxa2) => {
    let anos = 0
    let resultado = ''
    let criancaMaior = Math.max(altura1, altura2)
    let criancaMenor = Math.max(altura1, altura2)
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            resultado = 'A criança 1 ultrapassará a criança 2 em 1 ano.'
        } else if (taxa2 > taxa1) {
            resultado = 'A criança 2 ultrapassará a criança 1 em 1 ano.';
        }
    } else if (altura1 > altura2) {
        if (taxa2 <= taxa1) {
            resultado = `A criança menor não ultrapassará a maior.`
        }

        while (altura1 >= altura2) {
            altura1 += taxa1;
            altura2 += taxa2;
            anos++
        }

        resultado = `A criança 2 ultrapassará a criança 1 em ${anos} anos.`

    } else {
        if (taxa1 <= taxa2) {
            resultado = `A criança menor não ultrapassará a maior.`
        }
        while (altura2 >= altura1) {
            altura1 += taxa1;
            altura2 += taxa2;
            anos++
        }
        resultado = `A criança 2 ultrapassará a criança 1 em ${anos} anos.`
    }
    return resultado

}

console.log(calcularCrescimento(150, 145, 5, 7))
console.log(calcularCrescimento(140, 165, 8, 2))