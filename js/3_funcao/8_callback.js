// Callback é passar uma função para outra função, onde quando determinado evento acontecer a função passada será executada ("chamada de volta")

const fabricantes = ["Mercedes", "Audi", "BMW"]
function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

console.log("-----------------------")

// Sem callback
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
// const notasBaixas = []
// for (let i in notas) {
//   if (notas[i] < 7) {
//     notasBaixas.push(notas[i])
//   }
// }
// console.log(notasBaixas)

// Com callback:
const notasMenorQue7 = nota => nota < 7
const notasBaixas2 = notas.filter(notasMenorQue7)
// const notasBaixas2 = notas.filter(nota => nota < 7)
console.log(notasBaixas2)


// Exemplo no browser
document.getElementsByTagName('body')[0].onclick = () => console.log("O evento ocorreu!")

document.getElementsByTagName('body')[0].addEventListener('click', () => {
  console.log("O evento ocorreu!")
})

