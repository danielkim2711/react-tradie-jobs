import SearchBox from '../search-box/search-box.component';

import './hero.styles.css';
import backgroundImage from '../../assets/images/background.jpg';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='overlay'></div>
      <img src={backgroundImage} alt='job' className='hero-image' />
      <div className='hero-search-container'>
        <h2 className='hero-title'>All Jobs Everywhere</h2>
        <SearchBox className='hero-search-box' placeholder='Search jobs' />
      </div>
    </div>
  );
};

export default Hero;
