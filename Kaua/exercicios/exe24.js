//adicione ao objetivo do exercicio 1 uma lista com os nomes dos personagens do filme

//acesse e imprima no console cada pessoa do elenco junto com seu respectivo personagem 

//altere a primeira pessoa do elenco por "Xuxa"

//imprima no console todas as propriedades do objeto

// Criando o objeto do filme
const filme = {
    direcao: "Christopher Nolan",
    nome: "Inception",
    anoLancamento: 2010,
    elenco: [
      { ator: "Leonardo DiCaprio", personagem: "Cobb" },
      { ator: "Joseph Gordon-Levitt", personagem: "Arthur" },
      { ator: "Elliot Page", personagem: "Ariadne" }
    ],
    jaViu: true
  };
  
  // Usando while para acessar e imprimir cada pessoa do elenco junto com seu respectivo personagem
  let i = 0;
  while (i < filme.elenco.length) {
    console.log(`${filme.elenco[i].ator} interpreta ${filme.elenco[i].personagem}`);
    i++;
  }
  
  // Alterando a primeira pessoa do elenco para "Xuxa"
  filme.elenco[0].ator = "Xuxa";
  
 //.
 console.log(filme.elenco)