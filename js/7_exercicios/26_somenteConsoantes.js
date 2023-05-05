function removerVogais(string) {

    // usando regex
    const vogais = /[aeiou]/i // 'i' é uma flag que ignora a diferença entre letras maiúsculas e minúsculas
    
    // return string.split('').filter(char => !vogais.test(char)).join('')
    // return [...string].filter(char => !vogais.test(char)).join('') // alternativa para string.split('')
    return string.replace(/[aeiou]/ig, '')

    // sem regex
    // const vogais = ['a', 'e', 'i', 'o', 'u'];
    // return [...string].filter(char => !vogais.includes(char.toLowerCase())).join('');
}

console.log(removerVogais('COd3r'))
console.log(removerVogais('Fundamentos'))