//Crie um programa que peça ao usúario para inserir o seu nome e sua cor favorita
//e imprima a mensagem:

"A cor favorita de FULANO é COR"

//Faça o exercicío duas vezes, utilizando tampletes strings e concatenação

const nome = "Kauã"
let idade = "17"
let cor = "roxo"

const frase = `Meu nome é ${nome} tenho ${idade} anos e minha cor favorita e ${cor} `

console.log(`Meu nome é ${nome} tenho ${idade} anos e minha cor favorita e ${cor} `)

//Parte 2 exercicios 04

const nome1 = "Kauã"
let cor1 = "roxo"
const alt1 = 2
const frase1 = `Meu nome é ${nome1}  e minha cor favorita e ${cor1} `


//Prototipos de strings


//propriedade 

console.log(nome.length)

const propriedades = nome.length

//Metodos

console.log(nome.toLocaleUpperCase())
const metodo = nome.toLocaleUpperCase()
//LENGTH

console.log(nome.length)

console.log(`A variavel tem o nome ${nome.length}caracteres`)

//TOLOWERCASE

console.log(nome.toLocaleLowerCase())

//TOUPPERCASE

const fraseToup = "OoiEeeEi"
console.log(fraseToup.toUpperCase())
"touppercase deixa tudo maiuscula"

//INCLUDES

const palavra2 = "mamao"
console.log(`Na frase a palavra ${palavra2} foi encontrada? ${frase.includes(palavra2)}`)

//REPLACEALL

const texto = "Hoje comi conoura, adoro cenoura"
const novoTexto = texto.replaceAll("cenoura","batata")

console.log(novoTexto)

//exercicio 2

const tema = "Meu nome é Kauã"

console.log(tema.toUpperCase())

//exercicio 3

const temExe3 = "O pote de ouro no topo do monte brilhava ao sol"

console.log(temExe3.replaceAll("o","i"))

//exercicio 4

const fraseExe4 = "O pote de ouro no topo do monte brilhava ao sol"

console.log("A frase possui", fraseExe4.length,"palavras")
