// Como setar valores default para os parâmetros de uma função?

// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
  return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))

// outras estrategias
function soma2 (a, b, c) {
  a = a !== undefined ? a : 1
  b = 1 in arguments ? b : 1
  c = isNaN(c) ? 1 : c
  return a + b + c
}

// console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))
