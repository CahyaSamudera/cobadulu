import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <>
      <div className='wrap' id='hero'>
        <div className='content'>
          <h1>Jasa Penerjemah</h1>
          <p>Jasa Penerjemah Resmi dan Tersumpah</p>
          <div className='btn-group'>
            <a href='#'>
              <Link to='contact' className='color'>
                Hubungi Kami
              </Link>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
