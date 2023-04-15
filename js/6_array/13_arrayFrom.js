function repeat(element, qty) {
    return Array.from({ length: qty }, () => element);

} 

console.log(repeat('alo', 10))
