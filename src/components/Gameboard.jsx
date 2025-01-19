import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ onSelectSquare, currentPlayerSymbol }) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
        if (gameBoard[rowIndex][colIndex] !== null) {
            return;
        }
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(row => [...row])];
            updatedBoard[rowIndex][colIndex] = currentPlayerSymbol;
            return updatedBoard;
        })

        onSelectSquare();
    }
    return (<ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>)}
            </ol>
        </li>)}
    </ol>);
}