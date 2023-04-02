// nome muito sugestivo, ele serve para preencher um array

// fill recebe três parâmetros fill(value, start, end)
    // value: o valor usado para preencher o array.
    // start (opcional): o índice inicial que o preenchimento deve começar. O padrão é 0.
    // end (opcional): o índice final a ser preenchido. O padrão é array.length
function repeat(element, qty) {
    return Array(qty).fill(element);
} 

console.log(repeat('alo', 10))