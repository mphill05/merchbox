'use client';

import React, { useEffect } from 'react';
import styles from './page.module.scss';
import Accordian from '@/components/Accordian/Accordian';
import { motion, useAnimation } from 'framer-motion';
import { faqData } from '@/constants';
import { Reveal } from '@/components/Reveal/Reveal';

const FaqPage = () => {
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
        <h3>OUR MOST FREQUENTLY ASKED QUESTIONS</h3>
      </Reveal>
      {faqData.map((data, index) => (
        <Reveal key={index} className={styles.accordian}>
          <Accordian title={data.title} content={data.content} />
        </Reveal>
      ))}
    </div>
  );
};

export default FaqPage;
