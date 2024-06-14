//1.Crie um laço de repetição que escreva os números de 1 a 100

for (let numero = 1; numero <= 100; numero++) {
    console.log("1.",numero);
}
console.log()

//2.Crie um laço que imprima os números pares de 1 a 200

for (let numero = 2; numero <= 200; numero += 2) {
    console.log("2.",numero);
}
console.log()

//3.Crie um laço que imprima a tabuada do número 5

const numero = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`3.${numero} x ${i} = ${numero * i}`);
}
console.log()

//4.Faça uma array com 6 números e apartir dele crie um laço que imprima cada número do array

const numeros = [10, 20, 30, 40, 50, 60];

for (let i = 0; i < numeros.length; i++) {
    console.log("4.",numeros[i]);
}
console.log()