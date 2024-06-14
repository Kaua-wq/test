//1 
//Crie um array cm pelo menos 5 raças de cachorro
//Imprima no console a raça correspondente na terceira posição do array

console.log(`Número 1`)

let racasCachorro = ["Labrador Retriever", "Bulldog Francês", "Golden Retriever", "Pastor Alemão", "Poodle"];

console.log(racasCachorro[2])

console.log()


//2

//para este exercicio, começe criando um array com os valores:1,2,3,4,5,6 e exiba no terminal quando necessário 
//1.Determine o tamanho do array
//2.Remova o último elemento do array
//3.Adicione o número 7
//4.Verifique-se o array possui um elemento com o valor 6
//Remova o número 4 e 5
//Determine o novo tamanho do array

//2

// Criando o array com os valores dados
let array = [1, 2, 3, 4, 5, 6]
console.log("Array inicial:", array)

// 1. Determinado o tamanho do array
console.log("Tamanho do array:", array.length)

// 2. Removido o último elemento do array
array.pop();
console.log("Array após remover o último elemento:", array)

// 3. Adicionado o número 7
array.push(7);
console.log("Array após adicionar o número 7", array)

// 4. Verificando se o array possui um elemento com o valor 6
let temSeis = array.includes(6);
console.log("O array possui um elemento com o valor 6", temSeis)

// Removido o número 4 e 5
array.splice(2, 2);
console.log("Array após remover os números 4 e 5", array)

//novo tamanho do array
console.log("Novo tamanho do array:", array.length);