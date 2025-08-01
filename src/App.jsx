import { useEffect, useState } from "react";
import EditNoteModal from "./EditNoteModal";
import Heading from "./Heading";
import NoteForm from "./NoteForm";
import Notelists from "./Notelists";

function App() {
  const [notes, setNotes] = useState(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    return notes || [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleDeleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const [editingNote, setEditingNote] = useState(null);

  const handleEditNote = (updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
    setEditingNote(null);
  };

  return (
    <>
      <Heading />
      <NoteForm notes={notes} setNotes={setNotes} />
      <Notelists
        notes={notes}
        deleteNote={handleDeleteNote}
        onEdit={setEditingNote}
      />

      {editingNote && (
        <EditNoteModal
          note={editingNote}
          onSave={handleEditNote}
          onClose={() => setEditingNote(null)}
        />
      )}
    </>
  );
}

export default App;
