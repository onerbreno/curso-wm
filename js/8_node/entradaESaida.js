const anonimo = process.argv.indexOf('-a') !== -1 
// verifica se a flag foi passada no comendo "node entradaESaida.js"
// console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala anônimo!\n')
    process.exit()
} else {
    process.stdout.write(`Informe o seu nome: `)
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}\n`)
        process.exit()
    })
}