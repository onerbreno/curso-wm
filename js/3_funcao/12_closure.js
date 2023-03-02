// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função


// Closure se refere ao modo como uma função interna consegue acessar os parâmetros e variáveis de uma função externa a ela. 

function contador() {
    let count = 0;
    
    function incrementar() {
      count++;
      console.log(count);
    }
    
    return incrementar;
  }
  
  const contador1 = contador();
  contador1(); 
  contador1();