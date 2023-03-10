// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 
// A função recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) 
// que foi paga e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. 
// Por mês, é cobrado 5% de juros (sob o regime de juros compostos). 
// O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function calcularAnuidade(mes, valor) {

    if (mes <= 0 || mes > 12) {
        throw new Error("Mês inválido. O mês deve ser um número entre 1 e 12.");
    }

    const mesesAtraso = mes - 1;
    const juros = 1.05 ** mesesAtraso
    const anuidaidade = valor * juros
    return anuidaidade
}

console.log(calcularAnuidade(1, 100))