function segundoMaior(array) {
    // const maior = array.reduce((contador, atual, i, array) => {
        
    //     return contador > atual ? contador : atual 
    // })

    // delete array[array.indexOf(maior)]

    // return array.reduce((contador, atual) => {
    //     return contador > atual ? contador : atual 
    // })
    
    // const maiorNumero = Math.max(...array)
    // array = array.filter(numero => numero != maiorNumero)
    // const segundoMaior = Math.max(...array)

    // return segundoMaior
    


    const sortedArray = array.sort((a, b) => b - a);
    const uniqueSortedArray = [...new Set(sortedArray)]; // spread do return de new Set(sortedArray)
    // Set() estrutura de dados nativa do JavaScript que permite armazenar valores únicos
    
    if (uniqueSortedArray.length < 2) {
      return null;
    }
    
    // return sortedArray[1];
    return uniqueSortedArray[1];
}

console.log(segundoMaior([12, 16, 1, 5]))