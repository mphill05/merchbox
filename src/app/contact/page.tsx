'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import 'font-awesome/css/font-awesome.min.css';

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('CHOOSE AN OPTION');
  const [selectedOption, setSelectedOption] = useState(false);

  const options = ['<100', '100-500', '500-1000', '1000-5000', '5000+'];

  const handleClickOutside = (event: any) => {
    if (event.target.closest('.selectWrapper') === null) {
      setIsOpen(false);
    }
  };

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.contactPage}>
      <div className={styles.formHeader}>LET&apos;S WORK</div>
      <div className={styles.contactForm}>
        <form className={styles.form}>
          <div className={styles.nameEmailContainer}>
            <div className={styles.nameContainer}>
              <label htmlFor="Name" title="Name">
                NAME *
              </label>
              <input id="Name" type="text" placeholder="OTTO" required />
            </div>
            <div className={styles.emailContainer}>
              <label htmlFor="Email" title="Email">
                EMAIL *
              </label>
              <input
                id="Email"
                type="email"
                placeholder="HI@MERCHBOX.INFO"
                required
              />
            </div>
          </div>
          <div className={styles.companyAndQuantitiesContainer}>
            <div className={styles.artistContainer}>
              <label htmlFor="Company/Artist Name" title="Company/Arist Name">
                Company/Artist Name *
              </label>
              <input
                id="Company/Artist Name"
                type="text"
                placeholder="MERCHBOX"
              ></input>
            </div>
            <div className={styles.quantitiesContainer}>
              <label htmlFor="Quantities" title="Quantities">
                DESIRE QUANTITIES *
              </label>
              <div
                className={`${styles.selectWrapper} ${
                  selectedOption ? `${styles.optionSelected}` : ''
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className={styles.selectedValue}>
                  {selectedValue}
                  {isOpen ? (
                    <i className={`fa fa-angle-up ${styles.caret}`}></i>
                  ) : (
                    <i className={`fa fa-angle-down ${styles.caret}`}></i>
                  )}
                </div>
                {isOpen && (
                  <div className={styles.options}>
                    {options.map((option, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSelectedValue(option);
                          setSelectedOption(true);
                          setIsOpen(false);
                        }}
                        className={styles.option}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className={styles.projectContainer}>
            <label htmlFor="projectDesc">PROEJCT DESCRIPTION *</label>
            <textarea
              id="projectDesc"
              name="projectDesc"
              rows={2}
              cols={30}
              placeholder='EX: "200 BLACK T-SHIRT WITH LOGO ON THE FRONT LEFT AND A LARGE BACK PRINT WITH PRINTED NECK TAGS. I NEED THEM FOR MY TOUR IN NOVEMBER'
            ></textarea>
          </div>
          <div className="mockUpContainer">
            <label className="mock-up" htmlFor="mock-up">
              MOCK UP *
            </label>
            <label htmlFor="mock-up" className={styles.customMockUpBtn}>
              UPLOAD HERE +
            </label>
            <input
              id="mock-up"
              type="file"
              name="file"
              className={styles.mockUpBtn}
              style={{ display: 'none' }}
            />
            <p className={styles.mockUpUnderText}>MAX FILE SIZE 15MB</p>
            {/* Add captcha here */}
            <div className={styles.submitBtnContainer}>
              <button
                className={styles.submitBtn}
                type="submit"
                value={'Submit'}
              >
                Send!
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
