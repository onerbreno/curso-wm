// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar 
// o mínimo de cédulas para um determinado valor informado pelo usuário considerando notas 
// de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.

// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, 
// o programa deve informar apenas a seguinte informação (note que não foram exibidas 
// informações sobre as demais cédulas): 
// 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

let valor = 18;
let notas100 = 0;
let notas50 = 0;
let notas10 = 0;
let notas5 = 0;
let notas1 = 0;

while (valor >= 100) {
  notas100++;
  valor -= 100;
}

while (valor >= 50) {
  notas50++;
  valor -= 50;
}

while (valor >= 10) {
  notas10++;
  valor -= 10;
}

while (valor >= 5) {
  notas5++;
  valor -= 5;
}

while (valor >= 1) {
  notas1++;
  valor -= 1;
}

let mensagem = "";

if (notas100 > 0) {
  mensagem += notas100 + " nota(s) de R$ 100. ";
}

if (notas50 > 0) {
  mensagem += notas50 + " nota(s) de R$ 50. ";
}

if (notas10 > 0) {
  mensagem += notas10 + " nota(s) de R$ 10. ";
}

if (notas5 > 0) {
  mensagem += notas5 + " nota(s) de R$ 5. ";
}

if (notas1 > 0) {
  mensagem += notas1 + " nota(s) de R$ 1. ";
}

console.log(mensagem);