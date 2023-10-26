'use client';

import Link from 'next/link';
import { navLinks } from '@/constants';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navLeft}>
          <li className={styles.link}>
            <Link href={navLinks[0].route}>
              <Image
                src={navLinks[0].image}
                alt={navLinks[0].label}
                width={navLinks[0].imageWidth}
                height={navLinks[0].imageHeight}
                className={styles.logo}
                onClick={closeMenu}
              />
            </Link>
          </li>
        </div>
        <div className={styles.navRight}>
          {navLinks.slice(1).map((link, index) => (
            <>
              {index !== 0 && (
                <div className={styles.separator}>
                  <Image
                    src={'/line.png'}
                    alt="Separator"
                    width={70}
                    height={7}
                    className={styles.separator}
                  />
                </div>
              )}
              <li className={styles.link} key={link.label}>
                <Link href={link.route}>
                  <Image
                    src={link.image}
                    alt={link.label}
                    width={link.imageWidth}
                    height={link.imageHeight}
                    className={`${styles.rotatedImage} ${
                      link.className ? styles[link.className] : ''
                    }`}
                  />
                </Link>
              </li>
            </>
          ))}
        </div>
        <div className={styles.hambugerMenuWrapper}>
          <Hamburger toggled={menuOpen} toggle={toggleMenu} />
        </div>
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
          {navLinks.slice(1).map((link, index) => (
            <li className={styles.link} key={link.label}></li>
          ))}
        </div>
        <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}>
          <div className={styles.mobileNavLinks}>
            {navLinks.slice(1).map((link, index) => (
              <li className={styles.link} key={link.label}>
                <Link href={link.route}>
                  <Image
                    src={link.image}
                    alt={link.label}
                    width={link.imageWidth}
                    height={link.imageHeight}
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
            <a
              href={'https://www.instagram.com/merchbox/'}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagram}
            >
              <Image
                src={'/ig.png'}
                alt="Instagram"
                height={55}
                width={55}
                style={{ width: '50%', height: 'auto' }}
              />
            </a>
            <a
              href={'https://www.tiktok.com/@merchbox_la'}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.tiktok}
            >
              <Image
                src={'/tiktok.png'}
                alt="TikTok"
                height={55}
                width={55}
                style={{ width: '50%', height: 'auto' }}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
