'use client';

import { useEffect } from 'react';
import ClientsSection from './clients/page';
import InfoSection from './info/page';
import CheckoutSection from './ourwork/page';
import TeamSection from './team/page';
import { useAnimation } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
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

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      <TeamSection />
      <ClientsSection />
      <InfoSection />
      <CheckoutSection />
    </div>
  );
};

export default HomePage;
