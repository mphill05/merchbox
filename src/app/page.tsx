import { clientImages } from '@/constants';
import Image from 'next/image';
import styles from './page.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.teamSection}>
        <div className={styles.teamLeft}>
          <p>
            WE&apos;RE A MERCHANDISE POWERHOUSE FOR MUSICIANS, INFLUENCES AND
            BRANDS.
          </p>
          <button className={styles.tapeBtn}>
            <Link href={'/ourteam'}>
              <Image
                src={'/tape.png'}
                alt="Meet Our Team Button"
                height={100}
                width={400}
              />
              <p className={styles.teamBtn}>Meet Our Team</p>
            </Link>
          </button>
        </div>
        <div className={styles.teamRight}>
          <div className={styles.ottoWrapper}>
            <Image
              src={'/otto.png'}
              alt="Otto Merchbox Image"
              height={500}
              width={500}
            />
          </div>
          <div className={styles.threeStarsWrapper}>
            <Image
              src={'/threeStars.png'}
              alt="Three Stars Image"
              height={100}
              width={100}
            />
          </div>
        </div>
      </section>
      <section className={styles.clients}>
        <div className={styles.clientsHeader}>OUR CLIENTS</div>
        <div className={styles.imageGrid}>
          {clientImages.map((link, index) => (
            <div className={styles.imageWrapper} key={index}>
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={link.image}
                  alt={link.label}
                  height={90}
                  width={250}
                />
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.infoSection}>
        <div className={styles.infoTxt}>
          <p>FIRST THING FIRST...</p>
        </div>
        <div className={styles.sectionOne}>
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
        </div>
        <div className={styles.sectionTwo}>
          <div className={styles.preProd}>
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
          </div>
          <div className={styles.prod}>
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
          </div>
        </div>
        <div className={styles.sectionThree}>
          <div className={styles.delivery}>
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
          </div>
          <div className={styles.happyClients}>
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
          </div>
        </div>
      </section>
      <section className={styles.socialLinks}>
        <div className={styles.checkout}>
          <p>CHECK OUT OUR WORK!</p>
        </div>
        <div className={styles.socials}>
          <a href={styles.instagram} target="_blank" rel="noopener noreferrer">
            <Image src={'/ig.png'} alt="Instagram" height={55} width={55} />
          </a>
          <a href={styles.tiktok} target="_blank" rel="noopener noreferrer">
            <Image src={'/tiktok.png'} alt="TikTok" height={55} width={55} />
          </a>
        </div>
      </section>
    </main>
  );
}
