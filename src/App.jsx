import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/Gameboard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function deviveActivePlayer(turns) {
  if (turns.length === 0) {
    return 'X';
  }

  return turns[0].player === 'X' ? 'O' : 'X';
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deviveActivePlayer(gameTurns);

  let gameBoard = initialGameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const [first, second, third] = combination;

    const firstPlayer = gameBoard[first.row][first.column];
    const secondPlayer = gameBoard[second.row][second.column];
    const thirdPlayer = gameBoard[third.row][third.column];

    if (firstPlayer && firstPlayer === secondPlayer && firstPlayer === thirdPlayer) {
      winner = firstPlayer;
    }
  }

  function handlePlayerChange(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const activePlayer = deviveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns]

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={currentPlayer === 'X'} />
          <Player name="Player 2" symbol="O" isActive={currentPlayer === 'O'} />
        </ol>
        {winner && <p id="winner">Player {winner} wins!</p>}
        <GameBoard onSelectSquare={handlePlayerChange} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App
