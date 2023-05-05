function inverterChaveValorObj(obj) {

    
    // const newObj = {}
    // for (const teste in objeto) {
    //     Object.defineProperty(newObj, obj[teste], {
    //         enumerable: true, // para aparecer nos métodos keys, values, entries, ...
    //         writable: true,
    //         value: teste
    //     })

    // }
    // return newObj

    // const invertedObj = {}
    // for (const chave in obj) {
    //     const valor = obj[chave]
    //     invertedObj[valor] = chave
    // }

    // return invertedObj

    const paresDeChaveValorInvertidos = Object.entries(obj)
        .map( parChaveValor => parChaveValor.reverse() )
    return Object.fromEntries(paresDeChaveValorInvertidos)

    
}

const objeto = {
    a: '1',
    b: '2',
    c: '3',
}
console.log(inverterChaveValorObj(objeto))