// console.log(global)

global.minhaApp = Object.freeze({ // sem o freeze esse objeto pode ser alterado em qualquer lugar
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema legal'
})