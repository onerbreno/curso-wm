class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('João')
p1.falar()


// Comparação com função construtora e factory
function Pessoa2(nome) {
  this.nome = nome
  this.falar = () => console.log(`Meu nome é ${this.nome}`)
}

const p2 = new Pessoa2('Daniella')
p2.falar()

const criarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}

const p3 = criarPessoa('Breno')
p3.falar()