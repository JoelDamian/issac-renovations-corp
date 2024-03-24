'use client';

import { useId } from 'react';
import './ContactUs.css';
import { Input } from '../input/Input';
import { CiUser } from 'react-icons/ci';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { TextArea } from '../text-area/TextArea';
import { MdOutlineMessage } from 'react-icons/md';

export function ContactUs() {
  const emailId = useId();
  const phoneNumberId = useId();
  const name = useId();
  const Message = useId();

  const handleSubmitForm = () => {};

  return (
    <section className='contact-us-container'>
      <div className='section-contact-container '>
        <div className='title-container'>
          <h1 className='title-gallery'>Contact<p className='text-cinnabar-600 ml-1'>Us</p></h1>
        </div>

        <form onSubmit={handleSubmitForm} className='form-container'>
          <div className='input-container'>
            <Input
              type={'text'}
              id={name}
              style={{ borderRadius: '5px' }}
              color='grey'
              placeholder='Name'
            >
              <CiUser size={25} color='grey' />
            </Input>
            <Input
              type={'email'}
              id={emailId}
              style={{ borderRadius: '5px' }}
              color='grey'
              placeholder='Email'
            >
              <MdOutlineAlternateEmail size={25} color='grey' />
            </Input>
            <Input
              type={'text'}
              id={phoneNumberId}
              style={{ borderRadius: '5px' }}
              color='grey'
              placeholder='Phone Number'
            >
              <FaPhone size={25} color='grey' />
            </Input>
          </div>
          <TextArea
            type={'text'}
            id={Message}
            style={{ borderRadius: '5px' }}
            color='grey'
            placeholder='Message'
            rows='4'
          >
            <MdOutlineMessage size={25} color='grey' />
          </TextArea>
          <div className='container-button'>
            <button type='submit' className='button bg-cinnabar-600'>
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
