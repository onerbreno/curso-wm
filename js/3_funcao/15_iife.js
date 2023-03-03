// O que é IIFE? 
// Function expression auto invocada na própria declaração

(function() {
  const test = 'test';
  console.log('Será executado na hora!')
  console.log('Foge do escopo mais abrangente!')
})(); // sem ponto e virgula dá erro

(function() {
  console.log("Hello World");
})();

var increment = (function() {
  var x = 0;
  return function() {
    x++;
    console.log(x);
  }
})();

increment(); // 1
increment(); // 2
increment(); // 3