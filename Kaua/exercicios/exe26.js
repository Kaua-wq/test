/*O jogador deve escolher entre pedra, papel ou tesoura
2. Um segundo valor deve ser selecionado para que o jogo seja realizado(Um segundo valor de entrada ou um valor sorteado)
3. O sistema irá comparar os valores e determinara o vencedor
4. O sistema deverá perguntar se o(s) jogador(res) quem jogar novamente. Se sim  o jogo recomeçara
*/
function playGame() {
    const choices = ['pedra', 'papel', 'tesoura'];
    const playerChoice = prompt("Escolha entre pedra, papel ou tesoura:").toLowerCase();

    if (!choices.includes(playerChoice)) {
        alert("Escolha inválida! Tente novamente.");
        playGame();
        return;
    }

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    let result = '';
    if (playerChoice === computerChoice) {
        result = "Empate!";
    } else if (
        (playerChoice === 'pedra' && computerChoice === 'tesoura') ||
        (playerChoice === 'papel' && computerChoice === 'pedra') ||
        (playerChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        result = "Você venceu!";
    } else {
        result = "Você perdeu!";
    }

    console.log(`Você escolheu: ${playerChoice}`);
    console.log(`O computador escolheu: ${computerChoice}`);
    console.log(result);

    if (confirm("Deseja jogar novamente?")) {
        playGame();
    }
}

playGame();