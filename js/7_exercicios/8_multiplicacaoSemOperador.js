const multiplicar = (num1, num2) => {
    if (num1 == 0 || num2 == 0) return 0;

    let resultado = num1;
    for (let i = 1; i < Math.abs(num2); i++) resultado += num1; // Math.abs() retorna o numero absoluto (positivo)
    return num2 < 0 ? -resultado : resultado;
}

console.log(multiplicar(5, 5))