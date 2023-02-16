// GET -> O método get vai buscar o valor de uma propriedade específica
let Pessoa1 = {
  _valor: "teste", // o "_" é uma convenção conhecida por garantir que outras pessoas que venham trabalhar no código saibam que aquela variável foi pensada para ser privada e não ter seu valor modificado
  nome: "João",
  sobrenome: "Santos",
  idioma : "Português",

  get linguagem() {
    return this.idioma
  },
}
console.log(Pessoa.linguagem)
console.log(Pessoa)


// SET -> O set vai definir o valor de uma propriedade específica
let Pessoa2 = {
  nome: "Breno",
  sobrenome: "Santana",
  idioma : "",

  set linguagem (lang) {
      this.idioma = lang;
    }

}
Pessoa.linguagem = "Português"
console.log(Pessoa.idioma)
console.log(Pessoa)