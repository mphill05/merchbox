import { NavLinks, SocialLinks } from '@/constants/navLinks';
import React from 'react';

import styles from './Navbar.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface MobileMenuProps {
  menuOpen: boolean;
  toggleMenu?: () => void;
}

const MobileMenu = ({ menuOpen, toggleMenu }: MobileMenuProps) => {
  return (
    <>
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        {NavLinks.slice(1).map((link) => (
          <li className={styles.link} key={link.name}></li>
        ))}
      </div>
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
        <div className={styles.mobileNavLinks}>
          {NavLinks.slice(1).map((link) => (
            <li className={styles.link} key={link.name}>
              <Link href={link.path}>
                <Image
                  src={link.icon}
                  alt={link.name}
                  width={link.width}
                  height={link.height}
                  className={`${styles.rotatedImage} ${
                    link.className ? styles[link.className] : ''
                  }`}
                  onClick={toggleMenu}
                />
              </Link>
            </li>
          ))}
        </div>
        <div className={styles.socials}>
          {SocialLinks.map((link, key) => (
            <a
              key={key}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className={link.className}
            >
              <Image src={link.icon} alt={link.name} height={55} width={55} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
