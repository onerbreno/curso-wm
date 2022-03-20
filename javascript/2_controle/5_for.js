for (let i = 1; i <= 10; i++) {
  console.log(`i = ${i}`)
}

const notas = [6.7, 7.5, 4.7, 8.4, 5.3]
console.log(notas.length)
for (let i = 0; i < notas.length; i++) {
  console.log(`nota = ${notas[i]}`)
}

// in

for (let i in notas) {
  console.log(i, notas[i])
}

const pessoa = {
  nome: "Ana",
  idade: 18,
  peso: 55
}

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}

// break

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
  if (x == 5) {
    break
  }
  console. log(`x ${x} = ${nums[x]}`)
}

// continue

for (y in nums) {
  if (y == 5) {
    continue
  }
  console.log(`y ${y} = ${nums [y]}`)
}

// rótulos -> NÃO UTILIZAR, isso desvia o fluxo
externo: for (a in nums) {
  for (b in nums) {
    if(a == 2 && b == 3) break externo
    console. log(`Par = ${a}, ${b}`)
  }
}