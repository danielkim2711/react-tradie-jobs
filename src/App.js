import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Job from './routes/job/job.component';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:jobId' element={<Job />} />
      </Routes>
    </>
  );
}

export default App;
