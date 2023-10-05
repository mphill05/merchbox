import Link from 'next/link';
import { navLinks } from '@/constants';
import styles from './Navbar.module.scss';
import Image from 'next/image';

const Navbar = () => {
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
                    className={styles.rotatedImage}
                  />
                </Link>
              </li>
            </>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
