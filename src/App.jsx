import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/Gameboard";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function handlePlayerChange() {
    setCurrentPlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={currentPlayer === 'X'} />
          <Player name="Player 2" symbol="O" isActive={currentPlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handlePlayerChange} currentPlayerSymbol={currentPlayer} />
      </div>
      LOG
    </main>
  );
}

export default App
