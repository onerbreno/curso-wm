function verificaAnoBissexto(ano) {
    return (ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0
}

console.log(verificaAnoBissexto(2020))
console.log(verificaAnoBissexto(2004))
console.log(verificaAnoBissexto(2000))

console.log(verificaAnoBissexto(2100))
