function removerPropriedade(obj, prop) {
    // const newObj = Object.assign({}, obj)
    // if(Object.keys(obj).some(e => e == prop)) delete newObj[prop]
    if(prop in obj) { // verifica se existe prop no obj, retorn true ou false
        const newObj = { ...obj }
        delete newObj[prop]
        return newObj;
    } else {
        return null
    }
}

const obj = {
    name: 'breno',
    idade: 19
}
console.log(removerPropriedade(obj, 'cidade'))
console.log(removerPropriedade(obj, 'idade'))
console.log(Object.is(removerPropriedade(obj, 'idade'), obj))
