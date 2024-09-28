import React from 'react';

function Note({ note, index, deleteNote }) {
    return (
        <div className="note">
            <span>{note}</span>
            <button onClick={() => deleteNote(index)}>Delete</button>
        </div>
    );
}

export default Note;
