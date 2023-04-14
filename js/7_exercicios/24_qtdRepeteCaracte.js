function contarCaractere(caracte, frase) {
    const regex = new RegExp(caracte, 'g')
    const resultado = frase.match(regex)
    return resultado ? resultado.length : 0;
}

console.log(contarCaractere('b', "olá macaco"))