// 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de 
// modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetor e vice 
// versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar.

function trocarVetores(vet1, vet2) {
    // [vet1, vet2] = [vet2, vet1]

    for (let i = 0; i < vet1.length; i++) {
        // vet1[i] = vet1[i] + vet2[i]
        // vet2[i] = vet1[i] - vet2[i]
        // vet1[i] = vet1[i] - vet2[i]

        vet1[i] = vet1[i] ^ vet2[i];
        vet2[i] = vet1[i] ^ vet2[i];
        vet1[i] = vet1[i] ^ vet2[i];
    }
    return [vet1, vet2]
}

const vet1 = [1, 2, 3, 4, 5]
const vet2 = [6, 7, 8, 9, 10]
console.log(trocarVetores(vet1, vet2))