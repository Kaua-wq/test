  //para cada segundo que for par, mostre a palavra "TIC" para cada segundo que for impar, mostre a palavra "TAC"
  //quando o segundo for 0, mostre a palavra "BOOOOOOOMM"
  //E passe para for

   function contagemParImparBoom() {
    for (let contador = 10; contador >= 0; contador--) {
      let resultado = '';
      if (contador % 2 === 0) {
        resultado = "TIC";
      } else {
        resultado = "TAC";
      }
  
      console.log(contador + ': ' + resultado);
  
      if (contador === 0) {
        console.log("BOOOOOOOMM");
      } else {
        setTimeout(() => {
        }, 1000); // 1000 milissegundos = 1 segundo
      }
    }
  }
  
  contagemParImparBoom();

  const numeros = [1,8,12,20,35,99] 

  for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
  }