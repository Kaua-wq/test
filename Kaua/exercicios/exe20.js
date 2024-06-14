//Crie uma função que receba um nome imprima o nome com uma mensagem de bom dia
//chame/invoque a funçao

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


  //ESCOPO

  const num = 10
function func1() {
  
}
  num2 = 5

  function func2(){
    console.log(num2)
    const num = 3
   }

  //}

//Retorno

  function calcularArea(largura, altura) {
    const area = altura * largura 
return area
}

const area = calcularArea(2,3)

