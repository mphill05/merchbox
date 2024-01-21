'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { Reveal } from '@/app/components/Reveal/Reveal';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactPageComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('CHOOSE AN OPTION');
  const [selectedOption, setSelectedOption] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyArtistName, setCompanyArtistName] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const options = ['<100', '100-500', '500-1000', '1000-5000', '5000+'];

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleClickOutside = (event: any) => {
    if (event.target.closest('.selectWrapper') === null) {
      setIsOpen(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    const maxFileSize = 15 * 1024 * 1024;

    if (selectedFile && selectedFile.size > maxFileSize) {
      alert('File size exceeds 15 MB!');
      e.target.value = '';
      setFile(null);
    } else {
      setFile(selectedFile);
      e.target.value = '';
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRecaptchaChange = (value: any) => {
    console.log('Captch value:', value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      companyArtistName,
      quantities: selectedValue,
      projectDesc,
      file,
    };

    try {
      setLoading(true);

      console.log('Before fetch');
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('After fetch');

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        console.log('Error:', response.status);
      }
    } catch (error: unknown) {
      const e = error as Error;
      setLoading(false);
      console.log('Frontend Error:', e.message);
      console.log('Frontend Error Object:', JSON.stringify(e, null, 2));
    }
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
    <Reveal className={styles.contactPage}>
      <div className={styles.formHeader}>LET&apos;S WORK</div>
      <Reveal className={styles.contactForm}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.nameEmailContainer}>
            <div className={styles.nameContainer}>
              <label htmlFor="Name" title="Name">
                NAME *
              </label>
              <input
                id="Name"
                type="text"
                placeholder="OTTO"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={styles.emailContainer}>
              <label htmlFor="Email" title="Email">
                EMAIL *
              </label>
              <input
                id="Email"
                type="email"
                placeholder="HI@MERCHBOX.INFO"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                name="CompanyArtistName"
                type="text"
                placeholder="MERCHBOX"
                value={companyArtistName}
                onChange={(e) => setCompanyArtistName(e.target.value)}
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
              value={projectDesc}
              onChange={(e) => setProjectDesc(e.target.value)}
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
              onChange={handleFileChange}
            />
            {file ? (
              <div className={styles.uploadedFileText}>
                <span onClick={removeFile}>x</span>
                <span style={{ marginLeft: '10px' }}>{file.name}</span>
              </div>
            ) : (
              <p className={styles.mockUpUnderText}>MAX FILE SIZE 15MB</p>
            )}
            <div className={styles.submitBtnContainer}>
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                onChange={handleRecaptchaChange}
              />
              {loading ? (
                <button
                  disabled
                  type="button"
                  className={styles.disabledSubmitBtn}
                >
                  Sending...
                </button>
              ) : (
                <button
                  className={styles.submitBtn}
                  type="submit"
                  value={'Submit'}
                >
                  Send!
                </button>
              )}
            </div>
          </div>
        </form>
      </Reveal>
    </Reveal>
  );
};

export default ContactPageComponent;
