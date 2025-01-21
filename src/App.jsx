import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/Gameboard";
import Log from "./components/Log";

function deviveActivePlayer(turns) {
  if (turns.length === 0) {
    return 'X';
  }

  return turns[0].player === 'X' ? 'O' : 'X';
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = deviveActivePlayer(gameTurns);

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
        <GameBoard onSelectSquare={handlePlayerChange} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App
