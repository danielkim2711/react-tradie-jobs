import { FiEdit } from 'react-icons/fi';

import './note.styles.css';

const Note = ({ note, onEditNoteHandler }) => {
  return (
    <div className='note-container'>
      <p>{note}</p>
      <FiEdit style={{ cursor: 'pointer' }} onClick={onEditNoteHandler} />
    </div>
  );
};

export default Note;
