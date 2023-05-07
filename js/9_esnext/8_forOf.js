// prefira fazer "for's com propósito" 
// ex: filter, map...

for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}

const asssutosMap = new Map([
    ['Map', { abordados: true }],
    ['Set', { abordados: true }],
    ['Promise', { abordados: false }],
])

for (let assunto of asssutosMap) {
    console.log(assunto)
}

for (let assunto of asssutosMap.keys()) {
    console.log(assunto)
}

for (let assunto of asssutosMap.values()) {
    console.log(assunto)
}

for (let [chave, valor] of asssutosMap.entries()) {
    console.log(chave, valor)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}