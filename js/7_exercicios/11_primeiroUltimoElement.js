function receberPrimeiroEultimoElemento(array) {
    // return array.filter((_, i, array) => i == 0 || i == (array.length - 1))

    // const newArray = [];
    // newArray.push(array[0], array[array.length - 1])
    // return newArray

    return [array[0], array[array.length - 1]]
}

console.log(receberPrimeiroEultimoElemento([-100, 2, 3, 5, 6, 7, 8]))