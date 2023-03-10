// 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de 
// realizar. 

// Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. 

// Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que 
// na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 
// Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, 
// mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do 
// vetor, um string com a frase: “Delta é negativo”.

// function calcularBhaskara(ax2, bx, c) {
//     const delta = (bx ** 2) - (4 * ax2 * c)
//     if (delta < 0) {
//         console.log("Delta negativo")
//     } else {
//         const raizes = []
//         const raiz1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
//         const raiz2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
//         raizes.push(raiz1, raiz2)
//         return raizes
//     }
// }

// console.log(calcularBhaskara(3, 7, 3))

function calcularBhaskara(a, b, c) {
    const delta = b ** 2 - 4 * a * c;
    
    if (delta < 0) {
      return "Delta negativo";
    }
    
    const raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
    const raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    
    return [raiz1, raiz2];
  }
  
  console.log(calcularBhaskara(3, 7, 3));
  console.log(calcularBhaskara(3, 4, 3));