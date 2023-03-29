const array = [1, [2, [3, [4]]]];
console.log(array)

let flatArray = array.flat(); // default é 1 nivel de profundidade de achatamento
console.log(flatArray)
flatArray = array.flat(2); // 2 níveis de profundidade de achatamento
console.log(flatArray)
flatArray = array.flat(Infinity); // achata completamente todos os array aninhados
console.log(flatArray)