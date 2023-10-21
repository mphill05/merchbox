'use client';

import { clientImages } from '@/constants';
import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { Reveal } from '@/components/Reveal/Reveal';
//@ts-ignore
import Zoom from 'react-reveal/Zoom';

export default function Home() {
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

  return (
    <main className={styles.main}>
      <section className={styles.teamSection}>
        <div className={styles.teamLeft}>
          <Reveal className={styles.topText}>
            <p className={styles.topText}>
              WE&apos;RE A MERCHANDISE POWERHOUSE FOR MUSICIANS, INFLUENCES AND
              BRANDS.
            </p>
            <div className={styles.teamBtnContainer}>
              <button className={styles.tapeBtn}>
                <Link href={'/ourteam'}>
                  <Image
                    src={'/tape.png'}
                    alt="Meet Our Team Button"
                    height={93}
                    width={476}
                    className={styles.ourTeamBtn}
                  />
                  <p className={styles.teamBtnText}>Meet Our Team</p>
                </Link>
              </button>
            </div>
          </Reveal>
        </div>
        <motion.div
          className={styles.teamRight}
          initial={{ x: 100, opacity: 0 }}
          animate={controls}
        >
          <div className={styles.ottoWrapper}>
            <Image
              src={'/otto.png'}
              alt="Otto Merchbox Image"
              height={464}
              width={448}
            />
          </div>
          <motion.div
            className={styles.threeStarsWrapper}
            initial={{ x: 100, opacity: 0 }}
            animate={controls}
          >
            <Image
              src={'/threeStars.png'}
              alt="Three Stars Image"
              height={129}
              width={103}
            />
          </motion.div>
        </motion.div>
      </section>
      <section className={styles.clients}>
        <Reveal className={styles.clientsHeader}>OUR CLIENTS</Reveal>
        <div className={styles.imageGrid}>
          {clientImages.map((link, index) => (
            <div className={styles.imageWrapper} key={index}>
              <Zoom>
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={link.image}
                    alt={link.label}
                    height={90}
                    width={250}
                  />
                </a>
              </Zoom>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.infoSection}>
        <Reveal className={styles.infoTxt}>
          <p>FIRST THING FIRST...</p>
        </Reveal>
        <Reveal className={styles.sectionOne}>
          <div className={styles.pricing}>
            <h3>
              <Image
                src={'/twoStars.png'}
                alt="Two Stars"
                height={60}
                width={60}
              />
              PRICING &amp; TIMELINE
            </h3>
            <p>
              Each project is different and we are here to meet your goals,
              whether it&apos;s keeping costs low, or doing a full capsule, we
              can adjust to your needs!
            </p>
          </div>
          <div className={styles.printReady}>
            <h3>
              PRINT READY{' '}
              <Image
                src={'/threeStars.png'}
                alt="Three Stars"
                height={60}
                width={60}
              />
            </h3>
            <p>
              We provide you with the ALL OF THE RIGHT information to get your
              art to a print ready standard. Please go to our Print Ready page
              to make sure your artWORK IS ALL SET TO GO!
            </p>
          </div>
        </Reveal>
        <div className={styles.sectionTwo}>
          <Reveal className={styles.preProd}>
            <h3>
              <Image
                src={'/threeStars.png'}
                alt="Three Stars"
                height={60}
                width={60}
              />
              PRE-PRODUCTION
            </h3>
            <p>
              ONCE WE RECEIVE YOUR PRINT READY ARTWORK, WE&apos;LL SEND OVER A
              MOCK UP FOR APPROVAL in order tO queue your order up for
              production,
            </p>
          </Reveal>
          <Reveal className={styles.prod}>
            <h3>
              PRODUCTION{' '}
              <Image
                src={'/twoStars.png'}
                alt="Two Stars"
                height={60}
                width={60}
              />
            </h3>
            <p>
              We produce your product to the highest quality keeping you updated
              along the way.
            </p>
          </Reveal>
        </div>
        <div className={styles.sectionThree}>
          <Reveal className={styles.delivery}>
            <h3>
              <Image
                src={'/twoStars.png'}
                alt="Two Stars"
                height={60}
                width={60}
              />{' '}
              DELIVERY &amp; FULFILLMENT
            </h3>
            <p>
              Depending on your needs, you can then schedule your pick up at our
              LA HQ, HAVE US ship to an event or venue, or WE CAN handle THE
              ENTIRE fullfilment PROCESS FROM START TO FINISH!
            </p>
          </Reveal>
          <Reveal className={styles.happyClients}>
            <h3>
              HAPPY CLIENTS & HAPPIER FANS!{' '}
              <Image
                src={'/twoStars.png'}
                alt="Two Stars"
                height={60}
                width={60}
              />
            </h3>
            <p>
              we love building long term partnerships with our clients and are
              already eager to take on your next PROJECT!
            </p>
          </Reveal>
        </div>
      </section>
      <section className={styles.socialLinks}>
        <Reveal className={styles.checkout}>
          <h4>CHECK OUT OUR WORK !</h4>
        </Reveal>
        <Reveal className={styles.socials}>
          <a href={styles.instagram} target="_blank" rel="noopener noreferrer">
            <Image src={'/ig.png'} alt="Instagram" height={55} width={55} />
          </a>
          <a href={styles.tiktok} target="_blank" rel="noopener noreferrer">
            <Image src={'/tiktok.png'} alt="TikTok" height={55} width={55} />
          </a>
        </Reveal>
      </section>
    </main>
  );
}
