//crie um objeto que represente um filme. Eledeve ter dadis da direção, o nome, o ano de 
//lançamento, uma lista com elenco e uma propriedade quie diga se voce ja o viu ou nao

//acesse e imprima no console cada uma das propriedades:uma metade usando . e a outra metade da 
//notação usandocolchetes

// Criando o objeto do filme
const filme = {
  direcao: "Christopher Nolan",
  nome: "A Origem",
  anoLancamento: 2010,
  elenco: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
  jaViu: true
};

// Acessando e imprimindo propriedades usando notação de ponto
console.log("Direção:", filme.direcao);
console.log("Nome:", filme.nome);

// Acessando e imprimindo propriedades usando notação de colchetes
console.log("Ano de Lançamento:", filme["anoLancamento"]);
console.log("Elenco:", filme["elenco"]);
console.log("Já viu:", filme["jaViu"]);