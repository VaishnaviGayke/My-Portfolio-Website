import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [buttonText, setButtonText] = useState('Submit now');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append('access_key', '1f1ea3f4-7edd-44d5-aab2-8577ecf3a895');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log('Success', res);
      
      // Clear the form fields
      event.target.reset();

      // Change the button text to "Email sent"
      setButtonText('Email sent');

      // Change the button text back to "Submit now" after 3 seconds
      setTimeout(() => {
        setButtonText('Submit now');
      }, 3000);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className='title-box'>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt='' />
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>
            Whether you want to discuss tech, share innovative ideas, or explore potential collaborations, I’m always up for a conversation. Feel free to drop me a message—let’s make something awesome together!
          </p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='' /> <p>vaishnavipgayke2120@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt='' /> <p>+1 (607)-296-8058</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt='' /> <p>New York, United States</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor=''>Your Name</label>
          <input type='text' placeholder='Enter your name' name='name' required />
          <label htmlFor=''>Your Email</label>
          <input type='email' placeholder='Enter your email' name='email' required />
          <label htmlFor=''>Write your message here</label>
          <textarea name='message' rows='8' placeholder='Enter your message' required></textarea>
          <button type='submit' className='contact-submit'>{buttonText}</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
