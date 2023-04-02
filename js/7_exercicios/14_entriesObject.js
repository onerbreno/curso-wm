function objetoParaArray(obj) {
    return Object.entries(obj)
}

const obj1 = {
    nome: "Maria",
    profissao: "Programadora"
}

console.log(objetoParaArray(obj1))