import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <h1>Kontak Kami</h1>
      <div className='container-2'>
        <div className='contactInfo'>
          <div className='box'>
            <div className='icon'>
              <FaMapMarkerAlt />
            </div>
            <div className='text'>
              <h3>Alamat</h3>
              <p>
                Jl Bintaro Raya No. 39 <br />
                Tangerang Selatan 15415.{' '}
              </p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <FaPhone />
            </div>
            <div className='text'>
              <h3>Telepon</h3>
              <p>+62 897 5674 00002</p>
            </div>
          </div>
          <div className='box'>
            <div className='icon'>
              <FaEnvelope />
            </div>
            <div className='text'>
              <h3>Email</h3>
              <p>jasaterjemah@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='contactForm'>
          <form action=''>
            <h2>Kirim Pesan</h2>
            <div className='inputBox'>
              <input type='text' name='name' required />
              <span>Nama Lengkap</span>
            </div>
            <div className='inputBox'>
              <input type='text' name='email' required />
              <span>Email</span>
            </div>
            <div className='inputBox'>
              <textarea name='message' required />
              <span>Tulis Pesan Anda ...</span>
            </div>
            <div className='inputBox'>
              <input type='submit' name='Submit' value='Kirim' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
