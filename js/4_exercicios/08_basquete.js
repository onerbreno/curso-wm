// // 08) Pedro joga N jogos de basquete por temporada. 

// Para saber como está ele está progredindo, ele mantém registro de todos os as 
// pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere 
// se o mesmo é maior ou menor que seu melhor e pior desempenho. 

// Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma 
// função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e 
// quando fez seu pior jogo. (Número do pior jogo).


const analisaPontuacao = (pontuacoes) => {
    // Transforma a string de pontuações em um array de números
    const arrayPontos = pontuacoes.split(' ').map(Number);

    let pontuacaoMaxima = arrayPontos[0];
    let quantidadeRecordes = 0;
    let numeroPiorJogo = 0;
    let pontuacaoPiorJogo = arrayPontos[0];

    // Loop pelos elementos do array de pontos a partir do segundo elemento
    for (let i = 1; i < arrayPontos.length; i++) {
        // Se a pontuação atual for maior que a pontuação máxima anterior, atualiza a pontuação máxima e incrementa a quantidade de recordes
        if (arrayPontos[i] > pontuacaoMaxima) {
            pontuacaoMaxima = arrayPontos[i];
            quantidadeRecordes++;
        }
        // Se a pontuação atual for menor que a pontuação do pior jogo anterior, atualiza a pontuação do pior jogo e o número do pior jogo
        if (arrayPontos[i] < pontuacaoPiorJogo) {
            pontuacaoPiorJogo = arrayPontos[i];
            numeroPiorJogo = i;
        }
    }

    return [quantidadeRecordes, numeroPiorJogo];
};

const pontuacoes = '10 20 20 8 25 3 0 30 1';
const resultado = analisaPontuacao(pontuacoes);
console.log(resultado);
