import React from 'react';
import styles from './page.module.scss';
import Accordian from '@/components/Accordian/Accordian';
import { faqData } from '@/constants';

const FaqPage = () => {
  return (
    <div className={styles.FaqMain}>
      <div>
        <h3>OUR MOST FREQUENTLY ASKED QUESTIONS</h3>
      </div>
      {faqData.map((data, index) => (
        <div key={index} className={styles.accordian}>
          <Accordian title={data.title} content={data.content} />
        </div>
      ))}
    </div>
  );
};

export default FaqPage;
