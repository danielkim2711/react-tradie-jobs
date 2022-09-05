import { useState } from 'react';
import { toast } from 'react-toastify';

import { AiOutlinePlus } from 'react-icons/ai';

import Note from '../note/note.component';

import './note-list.styles.css';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  const onAddNoteHandler = () => {
    const newNote = prompt('Please add a note');

    if (newNote.trim() === '') {
      alert('Please type something');
    } else {
      setNotes([...notes, newNote]);
    }
  };

  const onEditNoteHandler = (index) => {
    const newNotes = notes.slice();
    const editedNote = prompt('Update note');

    if (editedNote.trim() === '') {
      alert('Please type something');
    } else {
      newNotes[index] = editedNote;
      setNotes(newNotes);
      toast.success('Note updated successfully');
    }
  };

  return (
    <>
      <h2>Notes</h2>
      <button className='note-btn' onClick={onAddNoteHandler}>
        <AiOutlinePlus style={{ marginRight: '10px' }} />
        Add Note
      </button>

      {notes.map((note, index) => (
        <Note
          key={index}
          note={note}
          onEditNoteHandler={() => onEditNoteHandler(index)}
        />
      ))}
    </>
  );
};

export default NoteList;
