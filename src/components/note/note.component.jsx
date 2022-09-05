import { AiOutlinePlus } from 'react-icons/ai';

import './note.styles.css';

const Note = () => {
  return (
    <>
      <h2>Notes</h2>
      <button className='note-btn'>
        <AiOutlinePlus style={{ marginRight: '10px' }} />
        Add Memo
      </button>
    </>
  );
};

export default Note;
