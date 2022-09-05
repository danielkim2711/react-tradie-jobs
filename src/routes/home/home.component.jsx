import { useState, useEffect } from 'react';

import jobs from '../../db';

import Hero from '../../components/hero/hero.component';
import CardList from '../../components/card-list/card-list.component';

const Home = () => {
  const [searchField, setSearchField] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    const newFilteredJobs = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchField)
    );
    setFilteredJobs(newFilteredJobs);
  }, [searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <>
      <Hero onSearchChange={onSearchChange} />
      <CardList jobs={filteredJobs} />
    </>
  );
};

export default Home;
