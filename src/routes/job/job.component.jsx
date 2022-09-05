import { Link, useParams } from 'react-router-dom';

import jobs from '../../db';

import NoteList from '../../components/note-list/note-list.component';

import { IoArrowBack } from 'react-icons/io5';
import './job.styles.css';

const Job = () => {
  const { jobId } = useParams();

  return (
    <>
      {jobs
        .filter((job) => job.id === jobId)
        .map((job) => (
          <div key={job.id} className='job-container'>
            <Link to='/'>
              <button className='btn-go-back'>
                <IoArrowBack style={{ marginRight: '10px' }} /> Back
              </button>
            </Link>
            <div className='job-title-container'>
              <h1>{job.title}</h1>
              <p
                className={`job-status ${
                  job.defaultStatus === 'to priced'
                    ? 'job-status-to-priced'
                    : `job-status-${job.defaultStatus}`
                }`}
              >
                {job.defaultStatus}
              </p>
            </div>
            <div className='job-description-container'>
              <div className='job-description-left'>
                <p>Client Name:</p>
                <p>Location:</p>
                <p>Client Email:</p>
                <p>Contact Phone:</p>
                <p>Date Published:</p>
              </div>
              <div className='job-description-right'>
                <p>{job.clientName}</p>
                <p>{job.location}</p>
                <p>{job.clientEmail}</p>
                <p>{job.contactPhone}</p>
                <p>{job.createdAt}</p>
              </div>
            </div>

            <NoteList />
          </div>
        ))}
    </>
  );
};

export default Job;
