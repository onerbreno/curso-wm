// 34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará 
// True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) 
// estejam contidos em ambas palavras

function comparaString(str1, str2) {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    for (let i = 0; i < str1.length; i++) {
        if (!str2.includes(str1.charAt(i))) {
            return false
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (!str1.includes(str2.charAt(i))) {
            return false
        }
    }
    return true
}

console.log(comparaString("amor", "rambo"))