// Callback é passar uma função para outra função, onde quando determinado evento acontecer a função passada será executada ("chamada de volta")

const fabricantes = ["Mercedes", "Audi", "BMW"]
function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

console.log("-----------------------")
// Outro exemplo:
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
const notasBaixas = notas.filter(nota => nota < 7)
console.log(notasBaixas)
