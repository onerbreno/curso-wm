function estaEntre(num, min, max, inclusivo) {
    // if (inclusivo) {
    //     return num >= min && num <= max;
    //   }
      
    // return num > min && num < max;
    
    return inclusivo ? num >= min && num <= max : num > min && num < max;
}

console.log(estaEntre(10, 1, 10, true))
console.log(estaEntre(10, 1, 10))
console.log(estaEntre(1, 1, 10))
console.log(estaEntre(1, 5, 10))
