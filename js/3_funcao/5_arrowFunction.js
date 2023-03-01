// Arrow Function é uma função anônima, utilizada para reduzir a sintaxe.
let dobro = (a) => {
  return 2 * a
}
dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())


// Como o THIS reage em uma Arrow Function? Ele se torna "constante", não varia
function Pessoa() {
  this.idade = 0

  setInterval(() => {
    this.idade++
    console.log(this.idade)
  }, 1000)
}
new Pessoa