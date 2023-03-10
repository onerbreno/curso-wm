// 36) Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos 
// e um número inteiro. Faça com que a primeira função retorne outro vetor que será resultado 
// da multiplicação de cada elemento pelo número passado como parâmetro. A segunda função 
// fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.

const multiplicaVetor = (num, vetor) => {
    return vetor.map(element => element * num);
};

const vet = [2, 4, 6, 8, 10];
console.log(multiplicaVetor(2, vet));

const multiplicaVetorMaiorQueCinco = (num, vetor) => {
    if (num > 5) {
        return vetor.map(element => element * num);
    } else {
        return "Número inteiro menor que 5";
    }
};
