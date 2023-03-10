// 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de 
// cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído 
// o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.

const converteNotas = (vetNotas) => {
    const vetConceitos = vetNotas.map(nota => {
        if (nota <= 4.9) {
            return 'D'
        } else if (nota <= 6.9) {
            return 'C'
        } else if (nota <= 8.9) {
            return 'B'
        } else {
            return 'A'
        }
    })
    return vetConceitos
}

const vetNotas = [5.5, 6.7, 10, 8.7]
console.log(converteNotas(vetNotas))