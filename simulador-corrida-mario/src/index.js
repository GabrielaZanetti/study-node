const player1 = {
    nome: "Mario",
    vel: 4,
    manobrabilidade: 3,
    poder: 3,
    pontos: 0
}

const player2 = {
    nome: "Luigi",
    vel: 3,
    manobrabilidade: 4,
    poder: 4,
    pontos: 0
}

async function rollDice() {
    return Math.floor((Math.random() * 6)) + 1;
}

async function getRandomBlock() {
    let random = Math.random()
    let result;

    switch (true) {
        case random < 0.33:
            result = "Reta"
            break;

        case random < 0.66:
            result = "Curva"
            break;
    
        default:
            result = "Confronto"
            break;
    }
    return result;
}

async function logRollResult(caracterName, block, diceReslt, attibute) {
    console.log(`${caracterName} rolou um dado de ${block} ${diceReslt} + ${attibute} = ${diceReslt+attibute}`);
}

async function playRaceEngine(character1, character2) {
    for (let round = 0; round <= 5; round++) {
        console.log(`* Rodada ${round}`);

        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`);

        let diceReslt1 = await rollDice();
        let diceReslt2 = await rollDice();

        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;
        
        if (block === "Reta") {
            totalTestSkill1 = diceReslt1 + character1.vel
            totalTestSkill2 = diceReslt2 + character2.vel
            await logRollResult(character1.nome, "Velocidade", diceReslt1, character1.vel)
            await logRollResult(character2.nome, "Velocidade", diceReslt2, character2.vel)
        }

        if (block === "Curva") {
            totalTestSkill1 = diceReslt1 + character1.manobrabilidade
            totalTestSkill2 = diceReslt2 + character2.manobrabilidade
            await logRollResult(character1.nome, "Manobrabilidade", diceReslt1, character1.manobrabilidade)
            await logRollResult(character2.nome, "Manobrabilidade", diceReslt2, character2.manobrabilidade)
        }

        if (block === "Confronto") {
            let powerResult1 = diceReslt1 + character1.poder
            let powerResult2 = diceReslt2 + character2.poder

            console.log(`${character1.nome} confrontou com ${character2.nome}`);

            await logRollResult(character1.nome, "Poder", diceReslt1, character1.poder)
            await logRollResult(character2.nome, "Poder", diceReslt2, character2.poder)

            if (powerResult2 > powerResult1 && character1.pontos > 0) {
                console.log(`${character2.nome} venceu o confronto@! ${character1.nome} perdeu 1 ponto`);
                powerResult1.pontos--;
            }

            if (powerResult1 > powerResult2 && character2.pontos > 0) {
                console.log(`${character1.nome} venceu o confronto@! ${character2.nome} perdeu 1 ponto`);
                powerResult2.pontos--;

            }

            console.log(powerResult2 === powerResult1 ? "Confronto empatado! Nenhum ponto foi perdido!" : '');
        }

        if (totalTestSkill1 > totalTestSkill2) {
            console.log(`${character1.nome} marcou um ponto`);
            character1.pontos++
        } else if (totalTestSkill2 > totalTestSkill1) {
            console.log(`${character2.nome} marcou um ponto`);
            character2.pontos++
        }
        console.log("__________________________________________");
    }
}

async function declareWinner(character1, character2) {
    console.log('Resultado final');
    console.log(`${character1.nome}: ${character1.pontos} ponto(s)`);
    console.log(`${character2.nome}: ${character2.pontos} ponto(s)`);

    if (character1.pontos > character2.pontos)
        console.log(`\n ${character1.nome} venceu a corrida! Parabèns!`);
    else if (character2.pontos > character1.pontos)
        console.log(`\n ${character2.nome} venceu a corrida! Parabèns!`);
    else
        console.log("Acorrida terminou em empate!");
}

(async function main() {
    console.log(`|> Corrida entre ${player1.nome} e ${player2.nome} começando \n`);

    await playRaceEngine(player1, player2)
    await declareWinner(player1, player2)
}())