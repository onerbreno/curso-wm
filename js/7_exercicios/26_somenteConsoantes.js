function removerVogais(string) {

    // usando regex
    // const vogais = /[aeiou]/i
    // return string.split('').filter(char => !vogais.test(char)).join('')

    // sem regex
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return string.split('').filter(char => !vogais.includes(char.toLowerCase())).join('');
}

console.log(removerVogais('COd3r'))
console.log(removerVogais('Fundamentos'))