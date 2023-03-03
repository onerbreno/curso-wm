// São funções usadas para construir objetos

function Carro(velocidadeMaxima = 200, delta = 5) {
  // método privado
  let velocidadeAtual = 0

  // método público
  this.acelarar = function() {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeAtual
    }
  }

  // método público
  this.getVelocidadeAtual = function() {
    return velocidadeAtual
  }
}
const uno = new Carro
console.log(uno)
uno.acelarar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(320, 20)
ferrari.acelarar()
ferrari.acelarar()
console.log(ferrari.getVelocidadeAtual())

function Ventilador(velMax) {
  this.velocidadeMaxima = velMax; // método público
  this.ligado = false; // método público
}

console.log(typeof Carro)
console.log(typeof ferrari)

// Instâncias
// Para criar uma instância de um objeto do tipo "Ventilador" (em outras palavras, criar um objeto a partir do molde) usamos a palavra reservada "new" seguida da chamada da função
const ventilador1 = new Ventilador(3)


// Podemos adicionar propriedades e métodos em tempo de execução
ventilador1.cor = "branco"
console.log(ventilador1.cor)

ventilador1.ligaDesliga = function () {
  if (this.ligado) {
    this.ligado = false
  } else {
    this.ligado = true
  }
}

// Acessando propriedades
ventilador1.ligaDesliga()
console.log(ventilador1.ligado)
ventilador1.ligaDesliga()
console.log(ventilador1.ligado)

console.log(ventilador1)