// O que é IIFE? 
// Function expression auto invocada na própria declaração

(function() {
  const test = 'test';
  console.log('Será executado na hora!')
  console.log('Foge do escopo mais abrangente!')
})()
