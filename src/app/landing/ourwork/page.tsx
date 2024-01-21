import { Reveal } from '@/app/components/Reveal/Reveal';
import Image from 'next/image';
import { SocialLinks } from '@/constants/navLinks';
import styles from '../page.module.scss';

const CheckoutSection = () => {
  return (
    <section className={styles.socialLinks}>
      <Reveal className={styles.checkout}>
        <h4>CHECK OUT OUR WORK !</h4>
      </Reveal>
      <Reveal className={styles.socials}>
        {SocialLinks.map((link, key) => (
          <div key={key}>
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`styles.${link.name}`}
            >
              <Image
                src={link.icon}
                alt={link.name}
                height={55}
                width={55}
                style={{ width: '30%', height: 'auto' }}
              />
            </a>
          </div>
        ))}
      </Reveal>
    </section>
  );
};

export default CheckoutSection;
