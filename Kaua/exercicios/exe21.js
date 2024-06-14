//Crie uma função que receba um nome imprima o nome com uma mensagem de bom dia
//chame/invoque a funçao
console.log(`Exercicio N° 1`)
console.log()
function imprimeMensagem(nome) {
    console.log(`Bom dia ${nome}!`);
  }
  
  imprimeMensagem("João");

  //Crie uma função que receba por parametro nomr, sobrenome e idade e imprima no console.log a mensagem:
  //Invoque esta função 3x passando 3 argumentos(diferentes)

  function imprimirMensagem(nome, sobrenome, idade) {
    console.log(`Nome: ${nome} ${sobrenome}, Idade: ${idade}`);
  }
  
  // Invoque a função 3 vezes com argumentos diferentes
  imprimirMensagem("João", "Silva", 25);
  imprimirMensagem("Maria", "Souza", 30);
  imprimirMensagem("Carlos", "Pereira", 40);

  //Agora passe para o Return

  // Função para imprimir uma mensagem de bom dia com o nome
function imprimeMensagem(nome) {
    console.log(`Bom dia ${nome}!`);
  }

console.log()
console.log(`Exercicio N° 2`)
console.log()

  // Chamando a função com um nome específico
  imprimeMensagem("João");
  
  // Função para imprimir informações de nome, sobrenome e idade
  function imprimirMensagem(nome, sobrenome, idade) {
    console.log(`Nome: ${nome} ${sobrenome}, Idade: ${idade}`);
  }
  
  // Chamando a função 3 vezes com argumentos diferentes
  imprimirMensagem("João", "Silva", 25);
  imprimirMensagem("Maria", "Souza", 30);
  imprimirMensagem("Carlos", "Pereira", 40);
  
  // Versão da função anterior usando a declaração de retorno (return)
  function retornaMensagem(nome, sobrenome, idade) {
    return (`Nome: ${nome} ${sobrenome}, Idade: ${idade}`);
  }
  
  // Armazenando o resultado da função em variáveis
  const mensagem1 = retornaMensagem("João", "Silva", 25);
  const mensagem2 = retornaMensagem("Maria", "Souza", 30);
  const mensagem3 = retornaMensagem("Carlos", "Pereira", 40);
  
  // Imprimindo as mensagens retornadas
  console.log(mensagem1);
  console.log(mensagem2);
  console.log(mensagem3);