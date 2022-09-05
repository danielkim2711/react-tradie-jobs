import jobs from '../../db';

import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = () => {
  return (
    <div className='card-list'>
      <p className='card-list-length'>
        List of jobs: <span>{jobs.length}</span>
      </p>
      {jobs.map((job) => {
        return <Card key={job.id} job={job} />;
      })}
    </div>
  );
};

export default CardList;
