export default function Log({ turns }) {
    return (
        <div id="log">
            <ol>
                {turns.map(({ square, player }, index) => (
                    <li key={index}>
                        <span>{player} played at row {square.row}, column {square.col}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}