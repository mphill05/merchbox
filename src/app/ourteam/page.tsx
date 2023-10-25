import React from 'react';
import styles from './page.module.scss';
import { teamData } from '@/constants';
import Image from 'next/image';

const TeamPage = () => {
  return (
    <div className={styles.teamMain}>
      <div>
        <h3>MEET OUR TEAM</h3>
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
              height={300}
              width={300}
              className={styles.teamImg}
              style={{ width: '60%', height: 'auto' }}
            />
            <div className={styles.teamInfo}>
              <h3>{data.name}</h3>
              <h5>{data.title}</h5>
              <p>{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
