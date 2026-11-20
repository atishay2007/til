const MOVES = ["rock", "paper", "scissors"];

function randomMove() {
  const idx = Math.floor(Math.random() * MOVES.length);
  return MOVES[idx];
}

function playRound(playerMove, cpuMove = randomMove()) {
  const player = playerMove.toLowerCase();
  if (!MOVES.includes(player)) {
    return { winner: "invalid", player, cpu: cpuMove };
  }

  if (player === cpuMove) {
    return { winner: "draw", player, cpu: cpuMove };
  }

  const playerWins =
    (player === "rock" && cpuMove === "scissors") ||
    (player === "paper" && cpuMove === "rock") ||
    (player === "scissors" && cpuMove === "paper");

  return {
    winner: playerWins ? "player" : "cpu",
    player,
    cpu: cpuMove,
  };
}

function runSampleMatch(rounds = 3) {
  let playerScore = 0;
  let cpuScore = 0;

  for (let i = 0; i < rounds; i++) {
    const result = playRound(randomMove());
    if (result.winner === "player") playerScore++;
    if (result.winner === "cpu") cpuScore++;
  }

  return { playerScore, cpuScore };
}

if (typeof module !== "undefined") {
  module.exports = { MOVES, randomMove, playRound, runSampleMatch };
}
