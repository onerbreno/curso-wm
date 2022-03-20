// comportamento do THIS:


// função tradicional
console.log("----------------------- função tradicional ")
let comparaComThis = function(param) {
  console.log(this === param)
}
comparaComThis(global)

// função tradicional com BIND
console.log("----------------------- função tradicional com bind ")

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

// arrow function
console.log("----------------------- arrow function")
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(this)
comparaComThisArrow(module.exports)

// arrow function com BIND
console.log("----------------------- arrow function com bind")

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(this)
comparaComThisArrow(module.exports)
