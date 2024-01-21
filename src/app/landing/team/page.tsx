import { Reveal } from '@/app/components/Reveal/Reveal';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { OUR_TEAM_PAGE_PATH } from '@/constants/routes';
import { Otto, Tape, ThreeStars } from '@/index';
import styles from '../page.module.scss';

const TeamSection = () => {
  const controls = useAnimation();

  return (
    <section className={styles.teamSection}>
      <div className={styles.teamLeft}>
        <Reveal className={styles.topText}>
          <p className={styles.topText}>
            WE&apos;RE A MERCHANDISE POWERHOUSE FOR MUSICIANS, INFLUENCES AND
            BRANDS.
          </p>
          <div className={styles.teamBtnContainer}>
            <button className={styles.tapeBtn}>
              <Link href={OUR_TEAM_PAGE_PATH}>
                <Image
                  src={Tape}
                  alt="Meet Our Team Button"
                  style={{ width: '100%', height: 'auto' }}
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
            src={Otto}
            alt="Otto Merchbox Image"
            style={{ width: '150%', height: 'auto' }}
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
            src={ThreeStars}
            alt="Three Stars Image"
            style={{ width: '30%', height: 'auto' }}
            width={103}
            height={129}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TeamSection;
