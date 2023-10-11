import React from 'react';
import styles from './page.module.scss';

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.formHeader}>LET&apos;S WORK</div>
      <div className={styles.contactForm}>
        <form className={styles.form}>
          <div>
            <label htmlFor="Name" title="Name">
              NAME *
            </label>
            <input id="Name" type="text" placeholder="OTTO" required />
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
          <div>
            <label htmlFor="Company/Artist Name" title="Company/Arist Name">
              Company/Artist Name *
            </label>
            <input
              id="Company/Artist Name"
              type="text"
              placeholder="MERCHBOX"
            ></input>
            <label htmlFor="Quantities" title="Quantities">
              DESIRE QUANTITIES *
            </label>
            <select id="Quantities" name="quantities">
              <option value={''}>CHOOSE AN OPTION</option>
              <option value={1}>100</option>
              <option value={2}>100-500</option>
              <option value={3}>500-1000</option>
              <option value={4}>1000-5000</option>
              <option value={5}>5000+</option>
            </select>
          </div>
          <label htmlFor="projectDesc">PROEJCT DESCRIPTION *</label>
          <textarea
            id="projectDesc"
            name="projectDesc"
            rows={2}
            cols={30}
            placeholder='EX: "200 BLACK T-SHIRT WITH LOGO ON THE FRONT LEFT AND A LARGE BACK PRINT WITH PRINTED NECK TAGS. I NEED THEM FOR MY TOUR IN NOVEMBER'
          ></textarea>
          <div className="bottomForm">
            <label className="mock-up" htmlFor="mock-up">
              MOCK UP *
            </label>
            <input id="mock-up" type="file" name="file" />
            <p>MAX FILE SIZE 15MB</p>
            {/* Add captcha here */}
            <button type="submit" value={'Submit'}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
