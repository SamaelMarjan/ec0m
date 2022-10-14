import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Wrapper>
      <h2 className='common-heading'>Contact-page</h2>

      <iframe 
        title='map'
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29209.868097259805!2d90.35408674999998!3d23.77469765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1665724678920!5m2!1sen!2sbd" 
        width="100%" height="450" style={{border:0}}
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>

      <div className='container'>
        <div className='contact-form'>
          <form 
            className='contact-inputs'
            action='https://formspree.io/f/xrgdljrr'
            method='POST'
          >

            <input 
              type='text' 
              placeholder='Username' 
              name='username' 
              required 
              autoComplete='off' />

            <input 
              type='email' 
              placeholder='Email' 
              name='email' 
              autoComplete='off' 
              required />

            <textarea 
              name='Message' 
              cols='30' rows='10' 
              required 
              autoComplete='off' 
              placeholder='Enter your message'></textarea>

            <input type='submit' value='send' />
          </form>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;
  }

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type='submit'] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({theme}) => theme.colors.white};
          border: 1px solid ${({theme}) => theme.colors.btn};
          color: ${({theme}) => theme.colors.btn};
          transfrom: scale(0.9);
        }
      }
    }
  }
`;

export default Contact;