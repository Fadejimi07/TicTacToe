export default function Log({ turns, players }) {
    return (
        <div id="log">
            <ol>
                {turns.map(({ square, player }, index) => (
                    <li key={index}>
                        <span>{`${players[player]} played ${player} at row ${square.row}, column ${square.col}`}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}