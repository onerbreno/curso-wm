// const filtrarNumero = array => array.filter(element => typeof(element) === 'number')
const filtrarNumero = array => array.filter(element => typeof element  === 'number')
// typeof é operador unário por isso os parenteses são opcionais


console.log(filtrarNumero([2, 3, 'a', '3']))