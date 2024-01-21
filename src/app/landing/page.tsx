'use client';

import ClientsSection from './clients/page';
import InfoSection from './info/page';
import CheckoutSection from './ourwork/page';
import TeamSection from './team/page';
import 'aos/dist/aos.css';
import styles from './page.module.scss';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <TeamSection />
      <ClientsSection />
      <InfoSection />
      <CheckoutSection />
    </main>
  );
};

export default HomePage;
