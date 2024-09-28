import React, { useState } from 'react';

function NoteForm({ addNote }) {
    const [note, setNote] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!note.trim()) return;
        addNote(note);
        setNote('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Schrijf hier een notitie..."
            />
            <button type="submit">Bewaar notitie</button>
        </form>
    );
}

export default NoteForm;
