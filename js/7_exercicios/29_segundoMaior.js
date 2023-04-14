function segundoMaior(array) {
    // const maior = array.reduce((contador, atual, i, array) => {
        
    //     return contador > atual ? contador : atual 
    // })

    // delete array[array.indexOf(maior)]

    // return array.reduce((contador, atual) => {
    //     return contador > atual ? contador : atual 
    // })

    const sortedArray = array.sort((a, b) => b - a);
    const uniqueSortedArray = [...new Set(sortedArray)];
    
    if (uniqueSortedArray.length < 2) {
      return null;
    }
    
    return uniqueSortedArray[1];
}

console.log(segundoMaior([12, 16, 1, 5]))