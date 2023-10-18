import React from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  const curYear = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <p>
        <span className={styles.copy}>&copy;</span> {curYear}{' '}
        <Link href={'/'}>MERCHBOX</Link>
      </p>
      <p>5721 CAHUENGA BLVD. NORTH HOLLYWOOD, CA 91601</p>
    </div>
  );
};

export default Footer;
