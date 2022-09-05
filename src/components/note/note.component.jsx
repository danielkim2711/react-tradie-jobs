import { FiEdit } from 'react-icons/fi';

import './note.styles.css';

const Note = ({ note, onEditNoteHandler }) => {
  return (
    <div className='note'>
      <p>{note}</p>
      <FiEdit style={{ cursor: 'pointer' }} onClick={onEditNoteHandler} />
    </div>
  );
};

export default Note;
