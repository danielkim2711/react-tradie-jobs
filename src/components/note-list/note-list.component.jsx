import { useState } from 'react';

import { AiOutlinePlus } from 'react-icons/ai';

import './note-list.styles.css';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  const onClickHandler = () => {
    const newNote = prompt('Please add a note');
    console.log(newNote);
    setNotes([...notes, newNote]);
  };

  return (
    <>
      <h2>Notes</h2>
      <button className='note-btn' onClick={onClickHandler}>
        <AiOutlinePlus style={{ marginRight: '10px' }} />
        Add Note
      </button>

      {notes.map((note) => (
        <h1>{note}</h1>
      ))}
    </>
  );
};

export default NoteList;
