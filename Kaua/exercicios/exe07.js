const num1 = 1
const num2 = 2
const num3 = 3

//1.O primeiro número é identico ao segundo? e o primeiro número é maior que o terceiro? true/false

const cond1 = (num1 === num2) && (num1 > num3)

console.log("1.O primeiro número é identico ao segundo? e o primeiro número é maior que o terceiro?")
console.log()
console.log(cond1) 

//2.O peimeiro número é diferente do segundo ou o primeiro número é menor igual do que o terceiro?

const cond2 = (num1 !== num2 ) || (num1 <= num3)

console.log()
console.log(`2.O peimeiro número é diferente do segundo ou o primeiro número é menor igual do que o terceiro?`)
console.log()
console.log(cond2)

//3.O terceiro número é maior que o segundo, e o terceiro número é menor que o primeiro

const cond3 = (num3 > num2) && (num3 < num1)

console.log()
console.log(`3.O terceiro número é maior que o segundo, e o terceiro número é menor que o primeiro`)
console.log()
console.log(cond3)
