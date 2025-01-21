import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/Gameboard";
import Log from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handlePlayerChange(rowIndex, colIndex) {
    setCurrentPlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
    setGameTurns(prevTurns => {
      let activePlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        activePlayer = 'O';
      }

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
      <Log />
    </main>
  );
}

export default App
