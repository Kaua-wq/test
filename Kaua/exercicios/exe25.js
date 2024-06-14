//Crie uma função que receba um objeto de pessoa e crie um novo objeto mantendo as propriedades originais e acrescentando 
//uma propriiedade com a lista de suas comidas preseridas;
//uma propriedade que seja um objeto, com nome e idade para representar o melhor amigo da pessoa 
// ainda na função, imprima no console as prioridades desse objeto seguindo o modelo a baixo
//"O nome da pessoa é ______ e suas comidas preferidas sao ____,____ e _____. Seu melhor amigo se chama_____ e tem _____anos"

function criarPessoaComInfosExtras(pessoa) {
    // Cria um novo objeto baseado na pessoa original e adiciona novas propriedades
    let novaPessoa = {
        ...pessoa,  // Copia todas as propriedades da pessoa original
        comidasPreferidas: ["pizza", "sushi", "chocolate"],  // Lista de comidas preferidas
        melhorAmigo: {  // Objeto representando o melhor amigo
            nome: "João",
            idade: 25
        }
    };
    //Imprime as propriedades do novo objeto no console
    console.log(`O nome da pessoa é ${novaPessoa.nome} e suas comidas preferidas são ${novaPessoa.comidasPreferidas.join(', ')}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos.`);

    // Retorna o novo objeto
    return novaPessoa;
}

// Exemplo de uso da função
const pessoaOriginal = {
    nome: "Maria",
    idade: 30,
    profissao: "Engenheira"
};

const novaPessoa = criarPessoaComInfosExtras(pessoaOriginal);
console.log(novaPessoa);