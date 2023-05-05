function contarCaractere(caractereBuscado, frase) {
    // const regex = new RegExp(caractereBuscado, 'g')
    // // 'g' significa "global", indicando que a expressão regular irá buscar todas as ocorrências do padrão na 
    // // string em vez de parar após encontrar a primeira ocorrência
    // const resultado = frase.match(regex)
    // return resultado ? resultado.length : 0;

    return [...frase].filter(caractere => caractere === caractereBuscado).length // uma string pode ser tratada como um array de caracteres
    // isso possibilita o uso do spread
}

console.log(contarCaractere('B', "olá Mr. B"))


const frase = 'alo'
console.log(...frase)