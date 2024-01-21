'use client';

import { useState } from 'react';
import styles from './Accordian.module.scss';

interface AccordianProps {
  title: string;
  content: string;
}

const Accordian: React.FC<AccordianProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordian}>
      <div className={styles.header} onClick={toggleOpen}>
        <span>{title}</span>
        <button className={styles.accordianBtn}>{isOpen ? '-' : '+'}</button>
      </div>
      {isOpen && <div className={styles.content}>{content}</div>}
    </div>
  );
};

export default Accordian;
