import React from 'react';
import Note from './Note';

function NoteList({ notes, deleteNote }) {
    return (
        <div className="note-list">
            {notes.map((note, index) => (
                <Note
                    key={index}
                    note={note}
                    index={index}
                    deleteNote={deleteNote}
                />
            ))}
        </div>
    );
}

export default NoteList;
