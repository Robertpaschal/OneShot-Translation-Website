'use client';

import React, { useState } from 'react';
import styles from '../../customStyles/contactUs.module.css';

const ContactUs = () => {
  const [selectedOption, setSelectedOption] = useState('sayHi');

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.container}>
      <header className={styles.headingSubheading}>
        <div className={styles.heading}>
          <div className={styles.headingLine}>
            <b className={styles.headingText}>Contact Us</b>
          </div>
        </div>
        <div className={styles.subtitle}>
          Connect with Us: Let's Discuss Your Next Translation Needs
        </div>
      </header>

      <section className={styles.mainContent}>
        <div className={styles.radioButtons}>
          <input
            id="sayHi"
            type="radio"
            name="contactOption"
            value="sayHi"
            checked={selectedOption === 'sayHi'}
            onChange={() => handleOptionChange('sayHi')}
          />
          <label htmlFor="sayHi">Say Hi</label>

          <input
            id="getQuote"
            type="radio"
            name="contactOption"
            value="getQuote"
            checked={selectedOption === 'getQuote'}
            onChange={() => handleOptionChange('getQuote')}
          />
          <label htmlFor="getQuote">Get a Quote</label>
        </div>

        <div
          className={`${styles.formContainer} ${
            selectedOption === 'sayHi'
              ? styles.sayHiSelected
              : styles.getAQuoteSelected
          }`}
        >
          {selectedOption === 'sayHi' ? (
            <form className={styles.form}>
              <input
                type="text"
                placeholder="Name"
                required
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Email"
                required
                className={styles.input}
              />
              <textarea
                placeholder="Message"
                className={styles.textarea}
              ></textarea>
              <button type="submit" className={styles.button}>
                Send Message
              </button>
            </form>
          ) : (
            <form className={styles.form}>
              <input
                type="text"
                placeholder="Name"
                required
                className={styles.input}
              />
              <input
                type="email"
                placeholder="Email"
                required
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Project Details"
                className={styles.input}
              />
              <textarea
                placeholder="Message"
                className={styles.textarea}
              ></textarea>
              <button type="submit" className={styles.button}>
                Request Quote
              </button>
            </form>
          )}
        </div>
        {/* Decorative elements */}
        <div className={styles.decorativeElementLeft}></div>
        <div className={styles.decorativeElementRight}></div>
      </section>
    </div>
  );
};

export default ContactUs;
