/* Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */

function jurosSimples (capital, taxa, tempo) {
  return `Juros simples: ${capital + (capital * taxa * tempo)}`
}

function jurosCompostos (capital, taxa, tempo) {
  return `Juros compostos: ${capital * (1 + taxa) ** tempo}`
}

console.log(jurosSimples(1000, 0.1, 3))
console.log(jurosCompostos(1000, 0.1, 3))