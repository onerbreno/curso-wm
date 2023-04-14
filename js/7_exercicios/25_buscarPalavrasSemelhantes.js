function buscarPalavrasSemelhantes(palavra, arrayPalavras) {
    // const verificarSemelhanca = string => string.indexOf(palavra) != -1 ? true : false // indexOf retorna o índice da ocorrência
    
    const verificarSemelhanca = string => string.includes(palavra) // retorna um true ou false 
    return arrayPalavras.filter(verificarSemelhanca)
}

console.log(buscarPalavrasSemelhantes('pro', ['profissional', 'academia', 'professor']))