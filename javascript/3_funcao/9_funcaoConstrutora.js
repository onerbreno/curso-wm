// São funções usadas para construir objetos

function Ventilador(velMax) {
  this.velocidadeMaxima = velMax; // método público
  this.ligado = false; // método público
}
        
// Instâncias
// Para criar uma instância de um objeto do tipo "Ventilador" (em outras palavras, criar um objeto a partir do molde) usamos a palavra reservada "new" seguida da chamada da função
const ventilador1 = new Ventilador(3)


// Podemos adicionar propriedades e métodos em tempo de execução
ventilador1.cor = "branco"
console.log(ventilador1.cor)

ventilador1.ligaDesliga = function() {
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