// Como mudar a referência do THIS? Utilize o BIND:

const pessoa = { 
  saudacao: 'Bom dia!',
  falar() {
    console.log(this.saudacao)
  }
}
pessoa.falar()

const falar = pessoa.falar // contexto do this muda
falar() // conflito entre paradigmas: funcional e 00

const falarDePessoa = pessoa.falar.bind(pessoa) // bind seta nessa constante a "referência do this" de volta para pessoa
falarDePessoa()


// Outra opção:
function Pessoa2() {
  this.idade = 0

  const self = this
  setInterval(function() {
    self.idade++
    console.log(self.idade)
  }/*.bind(this)*/, 1000)
}
new Pessoa2