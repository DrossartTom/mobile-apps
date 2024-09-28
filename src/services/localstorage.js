// src/services/localStorageService.js

const LOCAL_STORAGE_KEY = 'notes';

// Functie om notities op te halen
export const getNotes = () => {
    const storedNotes = localStorage.getItem(LOCAL_STORAGE_KEY);
    return storedNotes ? JSON.parse(storedNotes) : [];
};

// Functie om notities op te slaan
export const saveNotes = (notes) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
};

// Functie om een notitie toe te voegen
export const addNote = (note) => {
    const notes = getNotes();
    notes.push(note);
    saveNotes(notes);
};

// Functie om een notitie te verwijderen
export const deleteNote = (index) => {
    const notes = getNotes();
    notes.splice(index, 1);
    saveNotes(notes);
};
