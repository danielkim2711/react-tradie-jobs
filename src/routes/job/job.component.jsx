import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import jobs from '../../db';

import NoteList from '../../components/note-list/note-list.component';

import { IoArrowBack } from 'react-icons/io5';
import './job.styles.css';

const Job = () => {
  const [status, setStatus] = useState('scheduled');
  const [newStatus, setNewStatus] = useState('');

  const { jobId } = useParams();

  const onChangeStatusHandler = () => {
    const answer = window.confirm(
      'Are you sure you want to change the status?'
    );

    if (answer) {
      setNewStatus(status);
      toast.success('Status updated successfully');
    } else {
      toast.error('Error, please try again');
    }
  };

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
              <div className='job-status-container'>
                <p
                  className={`job-status ${
                    newStatus === 'to priced' ||
                    (job.defaultStatus === 'to priced' && newStatus === '')
                      ? 'job-status-to-priced'
                      : `job-status-${
                          newStatus ? newStatus : job.defaultStatus
                        }`
                  }`}
                >
                  {newStatus ? newStatus : job.defaultStatus}
                </p>
                <select
                  className=''
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value='scheduled'>Scheduled</option>
                  <option value='active'>Active</option>
                  <option value='invoicing'>Invoicing</option>
                  <option value='to priced'>To Priced</option>
                  <option value='completed'>Completed</option>
                </select>
                <button
                  className='btn-change-status'
                  onClick={onChangeStatusHandler}
                >
                  Change Status
                </button>
              </div>
            </div>
            <div className='job-description-container'>
              <div className='job-description-left'>
                <p>Client Name:</p>
                <p>Location:</p>
                <p>Client Email:</p>
                <p>Contact Phone:</p>
                <p>Date Created:</p>
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
