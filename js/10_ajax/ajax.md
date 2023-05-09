# Dificuldades quanto ao conteúdo de XHTML resumo pessoal!
 
## API
 
Um principio fundamental é saber que para se comunicar com o servidor e solicitar(request) coisas do servidor e receber uma resposta(response) precisamos de uma API, que usando como exemplo cliente, garçom e restaurante:
 
>Lembrando que api é um conjunto de funcionalidades, não uma coisa isolada dentro de uma função.
 
cliente: client (quem solicita)
garçaom: api (quem leva o pedido e trás a resposta)
restaurante: server (quem prepara o pedido levando pelo garçom, deixa o prato pronto para ser devolvido pelo garçom )
 
## XHR
 
Agora qual é o contexto que envolve Ajax e API?
 
    Ajax é a técnica que utiliza as apis nativas xhr ou fetch  para fazer requisições, receber e trabalhar com dados do servidor.
 
Indo direto ao ponto XMLHttpRequest(xhr) é uma API?
 
    Sim, xhr é uma api nativa do javascript, assim como fetch também é. 
 
[wikipedia](https://pt.wikipedia.org/wiki/XMLHttpRequest#:~:text=XMLHttpRequest%20(XHR)%20%C3%A9%20uma%20API,diretamente%20de%20volta%20ao%20script.)
 
>XMLHttpRequest (XHR) é uma API disponível em linguagens de script para navegadores web tais como JavaScript. É utilizada para enviar requisições HTTP ou HTTPS diretamente para um servidor web e carregar os dados de resposta do servidor diretamente de volta ao script. Apesar do nome XMLHttpRequest, os dados podem ser recebidos do servidor através de JSON, XML, HTML, ou como texto puro.
 
[mdn web docs](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest)
 
> XMLHttpRequest é um objeto nativo do javascript que fornece funcionalidade ao cliente para transferir dados entre um cliente e um servidor. Ele fornece uma maneira fácil de recuperar dados de um URL sem ter que fazer uma atualização de página inteira. Isso permite que uma página da Web atualize apenas uma parte do conteúdo sem interromper o que o usuário esteja fazendo. XMLHttpRequest é usado constantemente na programação de AJAX.
 
## Ajax 
 
Mas antes precisa-se entender de verdade o que é o ajax, visto que ele parece não ser uma api e sim uma espécie de tecnologia para se realizar requests, com certas coisas especiais. 
 
AJAX significa Asynchronous JavaScript e XML. Em poucas palavras, é o uso do objeto XMLHttpRequest para se comunicar com os scripts do lado do servidor.
 
[wikipedia](https://pt.wikipedia.org/wiki/Ajax_(programa%C3%A7%C3%A3o))
 
> Ajax (acrônimo em língua inglesa de Asynchronous Javascript and XML, em português "Javascript Assíncrono e XML") é o uso metodológico de tecnologias como Javascript e XML, providas por navegadores, para tornar páginas Web mais interativas com o usuário, utilizando-se de solicitações assíncronas de informações. Apesar do nome, a utilização de XML não é obrigatória (JSON é frequentemente utilizado) e as solicitações também não necessitam ser assíncronas, porém são mais interessantes quando se fala em ajax.
> A XMLHttpRequest (XHR) tem um papel importante na técnica de desenvolvimento web Ajax para se comunicar com os scripts do lado do servidor. Mais recentemente foi lançado o Fetch API, que possui funcionalidade semelhante ao XHR com linguagem em mais alto nível.
 
Os dois recursos em questão que você pode utilizar são:
 
* Fazer requisições para o servidor sem recarregar a página
 
* Receber e trabalhar com dados do servidor.
 
Então nós temos duas APIS nativas no javascript em questão
 
- xhr - sendo essa a mais antiga (_ver linha 3_)
- fetch - sendo essa a mais nova (_ver linha 3_)
 
sando o xhr você pode consumir dados de um JSON, ou xml, estando esses dados numa pasta do sistema ou em um servidor, independe onde eles estejam armazenados, o foco aqui seria como consumir esses dados, ou requisitar ou até enviar, e só quem tem o poder de comunicação client(front) e server(back) são as APIs 