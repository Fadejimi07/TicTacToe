import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/Gameboard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

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

function deriveWinner(gameTurns) {
  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const [first, second, third] = combination;

    const firstPlayer = gameBoard[first.row][first.column];
    const secondPlayer = gameBoard[second.row][second.column];
    const thirdPlayer = gameBoard[third.row][third.column];

    if (firstPlayer && firstPlayer === secondPlayer && firstPlayer === thirdPlayer) {
      winner = players[firstPlayer];
    }
  }

  return winner;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...initialGameBoard.map(row => [...row])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}

function App() {
  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2'
  });
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deviveActivePlayer(gameTurns);



  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameTurns);
  const draw = !winner && gameTurns.length === 9;

  function handlePlayerChange(rowIndex, colIndex) {
    setGameTurns(prevTurns => {
      const activePlayer = deviveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevTurns]

      return updatedTurns;
    });
  }

  function handleRestartGame() {
    setGameTurns([]);
  }

  function handlePlayerChangeName(symbol, newName) {
    setPlayers(prevPlayers => {
      const updatedPlayers = {
        ...prevPlayers,
        [symbol]: newName
      };
      return updatedPlayers;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={players['X']} symbol="X" isActive={currentPlayer === 'X'} onPlayerChange={handlePlayerChangeName} />
          <Player name={players['O']} symbol="O" isActive={currentPlayer === 'O'} onPlayerChange={handlePlayerChangeName} />
        </ol>
        {(winner || draw) && <GameOver winner={winner} draw={draw} onRestart={handleRestartGame} />}
        <GameBoard onSelectSquare={handlePlayerChange} board={gameBoard} />
      </div>
      <Log turns={gameTurns} players={players} />
    </main>
  );
}

export default App
