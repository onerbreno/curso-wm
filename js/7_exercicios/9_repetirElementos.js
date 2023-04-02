function repeat(element, qty) {
    // const newArray = [];
    // for (let i = 0; i < qty; i++) newArray.push(element) 
    // return newArray;

    // return Array.from({ length: qty }, () => element);


    return Array(qty).fill(element);
    // fill recebe três parâmetros fill(value, start, end)
    // value: o valor usado para preencher o array.
    // start (opcional): o índice inicial que o preenchimento deve começar. O padrão é 0.
    // end (opcional): o índice final a ser preenchido. O padrão é array.length
} 

console.log(repeat('alo', 10))

const arr = new Array(5).fill(0, 0, 3).map((_, i) => i + 1);
console.log(arr);