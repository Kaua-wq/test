//Faça uma contagem regressiva de 10 até 0

function contagemRegressiva() {
    let contador = 10;
  
    const intervalo = setInterval(() => {
      console.log(contador);
      contador--;
  
      if (contador < 0) {
        clearInterval(intervalo);
        console.log("Contagem regressiva concluída!");
      }
    }, 1000); // intervalo de 1 segundo
  }
  
console.log()

  contagemRegressiva()

  //para cada segundo que for par, mostre a palavra "TIC" para cada segundo que for impar, mostre a palavra "TAC"
  //quando o segundo for 0, mostre a palavra "BOOOOOOOMM"



  function contagemParImparBoom() {
    let contador = 10;
  
    const intervalo = setInterval(() => {
      if (contador % 2 === 0) {
        console.log("TIC");
      } else {
        console.log("TAC");
      }
  
      contador--;
  
      if (contador < 0) {
        clearInterval(intervalo);
        console.log("BOOOOOOOMM");
      }
    }, 1000); // intervalo de 1 segundo
  }
  
  contagemParImparBoom();
