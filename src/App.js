import React, { useState, useEffect } from 'react';
import './App.css';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { getNotes, addNote as saveNote, deleteNote as removeNote } from './services/localstorage';

function App() {
  const [notes, setNotes] = useState([]);

  // Ophalen van notities uit LocalStorage bij het laden van de app
  useEffect(() => {
    const storedNotes = getNotes();
    setNotes(storedNotes);
  }, []);

  // Notitie toevoegen aan de state en LocalStorage
  const addNote = (note) => {
    if (!note.trim()) return; // Controleer of de notitie niet leeg is
    saveNote(note); // Gebruik de service om de notitie op te slaan
    setNotes((prevNotes) => [...prevNotes, note]); // Update state
  };

  // Notitie verwijderen uit de state en LocalStorage
  const deleteNote = (index) => {
    removeNote(index); // Gebruik de service om de notitie te verwijderen
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index)); // Update state
  };

  return (
    <div className="App">
      <h1>Notitieblok-app</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
