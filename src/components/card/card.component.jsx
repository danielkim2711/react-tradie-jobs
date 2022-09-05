import { Link } from 'react-router-dom';

import './card.styles.css';

const Card = ({ job }) => {
  return (
    <Link to={job.id} className='card-container'>
      <h1>{job.title}</h1>
      <div className='card-details'>
        <p>{job.clientName}</p>
        <span>|</span>
        <p>{job.clientEmail}</p>
        <span>|</span>
        <p>{job.createdAt}</p>
      </div>
    </Link>
  );
};

export default Card;
