export default function GameOver({ winner, draw }) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{`${winner} won!`}</p>}
            {draw && <p>It's a tie!</p>}
            <button onClick={() => window.location.reload()}>Rematch</button>
        </div>
    );
}