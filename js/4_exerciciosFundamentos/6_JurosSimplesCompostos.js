// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros
// e tempo de aplicação. 

// A primeira função retornará o montante da aplicação financeira sob o regime de 
// juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos

function calcularJurosSimples(capital, taxa, tempo) {
    const jurosSimples = capital * taxa * tempo
    const montante = jurosSimples + capital
    return montante
}

console.log(calcularJurosSimples(1000, 0.2, 5))

function calcularJurosCompostos(capital, taxa, tempo) {
    const jurosCompostos = capital * (1 + taxa) ** tempo
    return jurosCompostos
}

console.log(calcularJurosCompostos(1000, 0.2, 5))