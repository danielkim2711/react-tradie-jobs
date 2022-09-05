import backgroundImage from '../../assets/images/background.jpg';

import './hero.styles.css';

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='overlay'></div>
      <img src={backgroundImage} alt='job' className='hero-image' />
      <h2 className='hero-title'>All Jobs Everywhere</h2>
    </div>
  );
};

export default Hero;
