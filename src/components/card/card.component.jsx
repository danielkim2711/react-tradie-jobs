import { Link } from 'react-router-dom';

import './card.styles.css';

const Card = ({ job }) => {
  const { id, title, clientName, clientEmail, createdAt, defaultStatus } = job;

  return (
    <Link to={id} className='card-container'>
      <h1>{title}</h1>
      <div className='card-details-status-container'>
        <div className='card-details'>
          <p>{clientName}</p>
          <span>|</span>
          <p>{clientEmail}</p>
          <span>|</span>
          <p>{createdAt}</p>
        </div>
        <span
          className={`card-status ${
            defaultStatus === 'to priced'
              ? 'card-status-to-priced'
              : `card-status-${defaultStatus}`
          }`}
        >
          {defaultStatus}
        </span>
      </div>
    </Link>
  );
};

export default Card;
