//OPERADOR E (&&)
const bool1 = true 
const bool2 = false 
const bool3 = true

console.log(bool1 && bool2)
console.log(bool1 && bool3)
console.log(bool3 && bool2)
console.log(bool1 && bool1)
console.log(bool3 && bool1)

//IDENTICO (===)

//"1" === "2" // false, são diferentes
// "2" === "2" // true, sao identicos
//"2" ==="2" // false, são diferentes

const condicao = 1 === 2
//o valor que sai da comparacao
//pode ser guardado em uma variavel
//nesse caso, condicao === false

//"1" !== "2"  // true, são diferentes
//"2" !== "2"  // falsem, sao identicos
//2 !== "2"  // true, são tipos diferentes

const condicao3 = 1 !== 2
console.log(condicao3)

//MAIOR / MAIOR IGUAL(>/>=)

//1 > 2 // false, porque 1 é ,menor que 2
//2 > 2 // false, porque 2 é igual a 2
//3 > 2 //true, porque 3 é menir que 2

const condicao4 = 1 > 2
console.log(condicao4)

//1 > 2 // false, porque 1 é ,menor que 2
//2 > 2 // true, porque 2 é igual a 2
//3 > 2 //true, porque 3 é menir que 2

const condicao5 = 1 >=1
console.log(condicao5)

//MENOR/MENOR(<=)

//1 < 2 // = true, porque 1 é menor que 2
//2 < 2 // false, porque 3 é menor que 2 
//3 < 2 // false, porque 3 é maior que 2

const condicao6 = 1 < 2
console.log(condicao6)

//1 <= 2 // true, porque 1 é menor que 2
//2 <= 2 // true, porque 2 é igual a 2
//3 <= 2 // false, porque 3 é maior que 2

const condicao7 = 2 < 2
console.log(condicao7)