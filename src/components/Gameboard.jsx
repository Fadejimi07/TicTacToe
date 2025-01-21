const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        const { square, player } = turn;
        const { row, col } = square;

        gameBoard[row][col] = player;
    }
    // gameTurns.forEach(({ square, player }) => {
    //     gameBoard[square.row][square.col] = player;
    // });
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIndex, colIndex) {
    //     if (gameBoard[rowIndex][colIndex] !== null) {
    //         return;
    //     }
    //     setGameBoard((prevGameBoard) => {
    //         const updatedBoard = [...prevGameBoard.map(row => [...row])];
    //         updatedBoard[rowIndex][colIndex] = currentPlayerSymbol;
    //         return updatedBoard;
    //     })

    //     onSelectSquare();
    // }
    return (<ol id="game-board">
        {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button></li>)}
            </ol>
        </li>)}
    </ol>);
}