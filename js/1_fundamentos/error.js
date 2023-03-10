function tratarErroELancar(erro) {
    // throw new Errow('...')
    // throw 10
    // throw true
    // throw 'message'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeCaixaAlta(obj) {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } catch (e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeCaixaAlta(obj)