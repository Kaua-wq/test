/*Crie uma contagem regressiva usando for. A diferença é que o número vai ser fornecido pelo úsuario através do comando readline
*/

const readline = require('readline');
const numeros = [1,8,12,20,35,99] 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número para a contagem regressiva: ', (numero) => {
  if (isNaN(numero)) {
    console.log('1.Por favor, digite um número válido.');
    rl.close();
    return;
  }

  numero = parseInt(numero);

  if (numero <= 0) {
    console.log('O número deve ser maior que zero.');
    rl.close();
    return;
  }

  console.log(`2.Iniciando contagem regressiva de ${numero}...`);

  for (let i = numero; i >= 0; i--) {
    console.log(i);
    if (i > 0) {
      setTimeout(() => {
      }, 2000); // 1000 milissegundos = 1 segundo
    }
  }

  rl.close();
});

const arrayDeNumeros = [10,20,30,40,50]
//para cadad numero do meu array de numeros, imprima o valor do numero
for (numero of arrayDeNumeros) {
    console.log(numeros)
}

//Crie um array com alguns numeros abaixo dele, crie uma variavel chamada soma e atribua a ela um valor de 0, agora crie um loop for of para ler este array e, usando a variavel soma, some todos os valores que estão dentro do array
 
const Num1 = [10, 20, 30, 40, 50];
let soma = 0;

for (let numero of Num1) {
  soma += numero;
}

console.log(`3.O resultado é ${soma}`);