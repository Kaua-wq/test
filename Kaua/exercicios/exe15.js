
  const readlineSync = require(`readline-sync`)

  let i = 0 
  let soma = 0 

while (i < 5) {
const pergunta1 = Number(readlineSync.question(`insira um numero:`));
soma += pergunta1;
  i++;
}
//somar todos os numeros que foram inseridos


console.log(`A soma dos numeros inseridos é: ${soma}`);
/*
*/ 
