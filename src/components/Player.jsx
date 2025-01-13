import { useState } from "react";

export default function Player({ name, symbol }) {
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState(name);

    function handleButtonClick() {
        setEditing(editing => !editing);
    }

    function handleChange(event) {
        setNewName(event.target.value);
    }

    return (
        <li>
            <span className="player">
                {editing ? <input type="text" required value={newName} onChange={handleChange} /> : <span className="player-name">{newName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleButtonClick}>{editing ? "Save" : "Edit"}</button>
        </li>
    );
}