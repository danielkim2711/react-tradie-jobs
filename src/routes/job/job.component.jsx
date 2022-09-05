import { Link, useParams } from 'react-router-dom';

import jobs from '../../db';

import Note from '../../components/note/note.component';

import { IoArrowBack } from 'react-icons/io5';
import './job.styles.css';

const Job = () => {
  const { jobId } = useParams();

  return (
    <>
      <div className='job-container'>
        <Link to='/'>
          <button className='btn-go-back'>
            <IoArrowBack style={{ marginRight: '10px' }} /> Back
          </button>
        </Link>
        <h1>Installing and maintaining water supply systems</h1>
        <div className='job-description-container'>
          <div className='job-description-left'>
            <p>Client Name:</p>
            <p>Location:</p>
            <p>Client Email:</p>
            <p>Contact Phone:</p>
            <p>Date Published:</p>
          </div>
          <div className='job-description-right'>
            <p>John Doe</p>
            <p>123 Great Road, Newmarket, Auckland 1234</p>
            <p>jdoe@example.co.nz</p>
            <p>021 123 4567</p>
            <p>05/09/2022</p>
          </div>
        </div>

        <Note />
      </div>
    </>
  );
};

export default Job;
