'use client';

import { useEffect } from 'react';
import styles from './page.module.scss';
import Accordian from '@/app/components/Accordian/Accordian';
import { useAnimation } from 'framer-motion';
import { faqData } from '@/constants/faqData';
import { Reveal } from '@/app/components/Reveal/Reveal';

const FAQPageComponent = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    });
  }, [controls]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        controls.start({
          opacity: 1,
          transition: { duration: 1 },
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <div className={styles.FaqMain}>
      <Reveal>
        <h2>OUR MOST FREQUENTLY ASKED QUESTIONS</h2>
      </Reveal>
      {faqData.map((data, index) => (
        <Reveal key={index} className={styles.accordian}>
          <Accordian title={data.title} content={data.content} />
        </Reveal>
      ))}
    </div>
  );
};

export default FAQPageComponent;
