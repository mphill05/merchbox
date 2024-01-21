import { Reveal } from '@/app/components/Reveal/Reveal';
import Image from 'next/image';
import { ClientLinks } from '@/constants/clientLinks';
import styles from '../page.module.scss';

const ClientsSection = () => {
  return (
    <section className={styles.clients}>
      <Reveal className={styles.clientsHeader}>
        <p>OUR CLIENTS</p>
      </Reveal>
      <div className={styles.imageGrid}>
        {ClientLinks.map((link, index) => (
          <div data-aos="fade-up" className={styles.imageWrapper} key={index}>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={link.image}
                alt={link.name}
                height={90}
                width={250}
                style={{ width: '100%', height: 'auto' }}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
