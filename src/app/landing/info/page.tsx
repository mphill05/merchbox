import { Reveal } from '@/app/components/Reveal/Reveal';
import Image from 'next/image';
import { Line, ThreeStars, TwoStars } from '@/index';
import styles from '../page.module.scss';

const InfoSection = () => {
  return (
    <section className={styles.infoSection}>
      <Reveal className={styles.infoTxt}>
        <p>FIRST THING FIRST...</p>
      </Reveal>
      <Reveal className={styles.sectionOne}>
        <div className={styles.pricing}>
          <h3>
            <Image
              src={TwoStars}
              alt="Two Stars"
              height={60}
              width={60}
              style={{ width: '10%', height: 'auto' }}
            />
            PRICING &amp; TIMELINE
          </h3>
          <p>
            Each project is different and we are here to meet your goals,
            whether it&apos;s keeping costs low, or doing a full capsule, we can
            adjust to your needs!
          </p>
        </div>
        <Reveal className={styles.lineLeft}>
          <Image src={Line} width={400} height={10} alt="line" />
        </Reveal>
        <div className={styles.printReady}>
          <h3>
            PRINT READY{' '}
            <Image
              src={ThreeStars}
              alt="Three Stars"
              height={60}
              width={60}
              style={{ width: '10%', height: 'auto' }}
            />
          </h3>
          <p>
            We provide you with the ALL OF THE RIGHT information to get your art
            to a print ready standard. Please go to our Print Ready page to make
            sure your artWORK IS ALL SET TO GO!
          </p>
        </div>
      </Reveal>
      <Reveal className={styles.lineRight}>
        <Image src={Line} width={340} height={10} alt="line" />
      </Reveal>
      <div className={styles.sectionTwo}>
        <Reveal className={styles.preProd}>
          <h3>
            <Image
              src={ThreeStars}
              alt="Three Stars"
              height={60}
              width={60}
              style={{ width: '10%', height: 'auto' }}
            />
            PRE-PRODUCTION
          </h3>
          <p>
            ONCE WE RECEIVE YOUR PRINT READY ARTWORK, WE&apos;LL SEND OVER A
            MOCK UP FOR APPROVAL in order tO queue your order up for production,
          </p>
        </Reveal>
        <Reveal className={styles.lineLeft2}>
          <Image src={Line} width={300} height={10} alt="line" />
        </Reveal>
        <Reveal className={styles.prod}>
          <h3>
            PRODUCTION{' '}
            <Image
              src={TwoStars}
              alt="Two Stars"
              height={60}
              width={60}
              style={{ width: '10%', height: 'auto' }}
            />
          </h3>
          <p>
            We produce your product to the highest quality keeping you updated
            along the way.
          </p>
        </Reveal>
      </div>
      <Reveal className={styles.lineRight2}>
        <Image src={Line} width={300} height={10} alt="line" />
      </Reveal>
      <div className={styles.sectionThree}>
        <Reveal className={styles.delivery}>
          <h3>
            <Image
              src={TwoStars}
              alt="Two Stars"
              height={60}
              width={60}
              style={{ width: '10%', height: 'auto' }}
            />{' '}
            DELIVERY &amp; FULFILLMENT
          </h3>
          <p>
            Depending on your needs, you can then schedule your pick up at our
            LA HQ, HAVE US ship to an event or venue, or WE CAN handle THE
            ENTIRE fullfilment PROCESS FROM START TO FINISH!
          </p>
        </Reveal>
        <Reveal className={styles.lineLeft3}>
          <Image src={Line} width={350} height={10} alt="line" />
        </Reveal>
        <Reveal className={styles.happyClients}>
          <h3>
            HAPPY CLIENTS & HAPPIER FANS!{' '}
            <Image
              src={TwoStars}
              alt="Two Stars"
              height={60}
              width={60}
              style={{ width: '10%', height: 'auto' }}
            />
          </h3>
          <p>
            we love building long term partnerships with our clients and are
            already eager to take on your next PROJECT!
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default InfoSection;
