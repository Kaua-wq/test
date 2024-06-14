//escreva um laço que imprima a tabuada de números
//UTILIZANDO WHILE      

const numero = 8;
console.log()


console.log("Tabuada do " + numero + ":");

let i = 1;
while (i <= 10) {
    console.log(numero + " x " + i + " = " + numero * i);
    i++;
}

//2

//Escreva um laço que percorre um array com números e devolva qual o maior dentro dele
//Exemplo para o array [11, 15, 18, 14, 12, 13], a saida dev e ser:O maior número é 18

console.log()
console.log(`Número 2`)
console.log()

const numeros = [11, 15, 18, 14, 12, 13];
let maiorNumero = numeros[0]; 

// Inicializa o maior número como o primeiro elemento do array

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}
console.log("O maior número é " + maiorNumero);

console.log()
console.log(`Número 3`)
console.log()

//Considere que voce tem um array com varias palavras nossa tarefa é criar um laço para imprimi-las em uma só
//mensagem colocando em espaço entre elas
//Exemplo para este arra ["Oi", "sumido", "tudo", "bem", ? "Saudades"], dar a mensagem "Oi sumido tudo bem? Saudades"

const palavras = ["Oi", "sumido", "tudo", "bem", "?"];
const palavras2 = ["Saudades"]
let mensagem = "";

for (let i = 0; i < palavras.length; i++) {
    mensagem += palavras[i];
    if (i < palavras.length - 1) {
        mensagem += " "; 
    }
}

console.log("Oi", "sumido", "tudo", "bem", "?");
console.log("Saudades")

console.log()
console.log("Número 4")
console.log()
