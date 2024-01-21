import { Metadata } from 'next';
import { teamData } from '@/constants/teamData';
import Image from 'next/image';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'OUR TEAM | MERCHBOX',
  description: 'merchbox.info',
};

const TeamPage = () => {
  return (
    <div className={styles.teamMain}>
      <div>
        <h2 className={styles.meetOurTeam}>MEET OUR TEAM</h2>
      </div>
      <div className={styles.teamGrid}>
        {teamData.map((data, index) => (
          <div
            key={index}
            className={`${styles.teamWrapper} ${
              teamData.length - 1 === index ? styles.lastItem : ''
            }`}
          >
            <Image
              src={data.image}
              alt={`Picture of ${data.name}`}
              height={556}
              width={556}
              className={styles.teamImg}
              style={{ width: '75%', height: 'auto' }}
            />
            <div className={styles.teamInfo}>
              <h2 className={styles.firstName}>{data.name}</h2>
              <h2 className={styles.positionTitle}>{data.title}</h2>
              <h2 className={styles.desc}>{data.desc}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
