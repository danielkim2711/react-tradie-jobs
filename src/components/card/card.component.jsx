import './card.styles.css';

const Card = ({ job }) => {
  return (
    <div className='card-container'>
      <h1>{job.title}</h1>
      <div className='card-details'>
        <p>{job.location}</p>
        <span>|</span>
        <p>{job.salary}</p>
        <span>|</span>
        <p>{job.createdAt}</p>
      </div>
    </div>
  );
};

export default Card;
