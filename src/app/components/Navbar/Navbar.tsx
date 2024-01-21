'use client';

import Link from 'next/link';
import { NavLinks } from '@/constants/navLinks';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import { usePathname } from 'next/navigation';
import { Line } from '@/index';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const currentPath = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent, route: string) => {
    e.preventDefault();

    if (currentPath === route) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.location.href = route;
    }
    closeMenu();
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navLeft}>
          <li className={styles.link}>
            <Link href={NavLinks[0].path}>
              <Image
                src={NavLinks[0].icon}
                alt={NavLinks[0].name}
                width={NavLinks[0].width}
                height={NavLinks[0].height}
                className={styles.logo}
                style={{
                  width: '100vw',
                }}
                onClick={(e) => handleLinkClick(e, NavLinks[0].path)}
              />
            </Link>
          </li>
        </div>
        <div className={styles.navRight}>
          {NavLinks.slice(1).map((link, index: Number) => (
            <>
              {index !== 0 && (
                <div className={styles.separator}>
                  <Image
                    src={Line}
                    alt="Separator"
                    width={70}
                    height={7}
                    className={styles.separator}
                  />
                </div>
              )}
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
                    style={{ width: 'auto' }}
                    onClick={(e) => handleLinkClick(e, link.path)}
                  />
                </Link>
              </li>
            </>
          ))}
        </div>
        <div className={styles.hambugerMenuWrapper}>
          <Hamburger toggled={menuOpen} toggle={toggleMenu} />
        </div>
        <MobileMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
