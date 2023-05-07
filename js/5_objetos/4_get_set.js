const sequencia = {
    _valor: 1, // o _ é uma convenção para nomes de atributos privados
    // JS não possui atributos privados, nesse caso é usado a ideia de closures para "privar" o atributo mas é possível bular isso
    get valor() { return this._valor++ }, // JS não suporta sobrecarga de métodos, com "exceção" do get e set
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
console.log(sequencia["_valor"]) // essa chamada burla os atributos privados

// // GET -> O método get vai buscar o valor de uma propriedade específica
// let Pessoa1 = {
//     _valor: "teste", // o "_" é uma convenção conhecida por garantir que outras pessoas que venham trabalhar no código saibam que aquela variável foi pensada para ser privada e não ter seu valor modificado
//     nome: "João",
//     sobrenome: "Santos",
//     idioma: "Português",

//     get linguagem() {
//         return this.idioma
//     },
// }
// console.log(Pessoa.linguagem)
// console.log(Pessoa)


// // SET -> O set vai definir o valor de uma propriedade específica
// let Pessoa2 = {
//     nome: "Breno",
//     sobrenome: "Santana",
//     idioma: "",

//     set linguagem(lang) {
//         this.idioma = lang;
//     }

// }
// Pessoa.linguagem = "Português"
// console.log(Pessoa.idioma)
// console.log(Pessoa)