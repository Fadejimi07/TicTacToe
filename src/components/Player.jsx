import { useState } from "react";

export default function Player({ name, symbol }) {
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState(name);

    function handleButtonClick() {
        if (editing) {
            setEditing(false);
            setNewName(document.querySelector("input").value);
        } else {
            setEditing(true);
        }
    }

    return (
        <li>
            <span className="player">
                {editing ? <input type="text" required /> : <span className="player-name">{newName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleButtonClick}>{editing ? "Save" : "Edit"}</button>
        </li>
    );
}