// function declaration

console.log(soma(3, 4)) // O javascript carrega todas as functions declarations antes do resto do código, portanto é possível chamar essa função antes de sua declaração

function soma(x, y) {
   return x + y
}



// function expression
const sub = function (x, y) {
   return x - y
}
console.log(sub(3, 4))



// named function expression
// única vantagem desta declaração é para debug, considerando que a função está nomeada
const mult = function mult(x, y) {
   return x * y
}

console.log(mult(3, 4))