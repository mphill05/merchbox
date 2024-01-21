import React from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import { Metadata } from 'next';
import {
  FileTypes,
  MerchboxLq,
  Merchbox,
  MbPantone,
  rgbcmyk,
  PrintDimensions,
  RedLine,
  Spvdtg,
  Otto,
  TwoStars,
} from '@/index';

export const metadata: Metadata = {
  title: 'PRINT READY',
  description: 'merchbox.info',
};

const PrintPage = () => {
  return (
    <main className={styles.main}>
      <h3>GETTING YOUR ART READY FOR PRODUCTION</h3>
      <div className={styles.printPage}>
        <div className={styles.topHeader}>
          <p>
            Use a vector-based program for designing your art to ensure its
            resolution is independent and can be resized without pixelation
          </p>
        </div>
        <div className={styles.fileFormats}>
          <p>ACCEPTED FILE FORMATS:</p>
          <div className={styles.formats}>
            <Image src={FileTypes} alt="File Types" height={85} width={370} />
          </div>
        </div>
        <div className={styles.criteria}>
          <p className={styles.criteriaOne}>
            Convert all text to vectorized outlines. Avoid using converter
            websites online, We recommend Adobe Illustrator to vectorize files.
          </p>
          <p className={styles.criteriaTwo}>
            We will not accept screenshots, compressed images or any
            low-resolution art. If you see fuzzy edges on your sharp”edges, that
            Is how it will print on your garment. Using lower resolution images
            with DTG especially may result in visible “artifacts” and “blocks”
            in the print.
          </p>
          <p className={styles.criteriaThree}>
            ARTWORK MUST BE 300 DPI or higher resolution, 3000 x 3000 pixels or
            higher is a good canvas size for most projects
          </p>
        </div>
        <div className={styles.merchBoxLq}>
          <div className={styles.merchBoxLqImgWrapper}>
            <Image src={MerchboxLq} alt="Logo LQ" height={140} width={500} />
          </div>
          <div className={styles.merchBoxDPI}>
            <p>300 DPI</p>
            <p>72 DPI</p>
          </div>
        </div>
        <div className={styles.coloring}>
          <p>
            Pantone+ SOLID COATED colors are used to match inks for screen
            printing, NOT HEX COLORS. IF YOU DON&apos;T SPECIFY THE EXACT
            PANTONE+ SOLID COATED COLOR, We will match your art to the closest
            Pantone+ SOLID COATED coloR. Please note: a custom color may need to
            be made to best match your art for an additional cost.
          </p>
        </div>
        <div className={styles.pantone}>
          <Image src={MbPantone} alt="MB Pantone" height={166} width={420} />
          <div className={styles.pantoneText}>
            <p>
              COLOR ON MOCK UP: <br /> HEX #e9cea3
            </p>
            <p>
              CLOSEST PANTONE+ SOLID COATED COLOR:
              <br />
              PANTONE 177 C
            </p>
          </div>
        </div>
        <div className={styles.colorMode}>
          <p>
            COLOR MODE SETTING MUST BE SET TO CMYK,{' '}
            <span className={styles.mobileBreak}>
              <br />
            </span>{' '}
            <u>we will not accept rgb</u>
          </p>
          <div className={styles.cmykImgWrapper}>
            <Image src={rgbcmyk} alt="RGB CMYK" height={142} width={392} />
          </div>
        </div>
        <div className={styles.printDimensions}>
          <p>
            Specify YOUR print dimensions in inches AND Provide detailed
            placement instructions WHEN SUBMITTING YOUR ARTWORK.{' '}
            <u>
              If you do not specify, we will run with industry-standard
              placements BASED ON YOUR MOCK UP.
            </u>
          </p>
          <div className={styles.tshirtWrapper}>
            <Image
              src={PrintDimensions}
              alt="T-Shirt"
              height={285}
              width={278}
            />
            <div className={styles.printDimImgText}>
              <p>two inches below the collar, center chest position</p>
              <div className={styles.redLine}>
                <Image
                  src={RedLine}
                  alt="Dotted Line"
                  width={270}
                  height={50}
                />
              </div>
              <div className={styles.redLine2}>
                <Image
                  src={RedLine}
                  alt="Dotted Line"
                  width={170}
                  height={50}
                />
              </div>
              <p>1/2 INCH ABOVE LEFT SLEEVE INSEAM, CENTERED ON SLEEVE </p>
            </div>
          </div>
          <p className={styles.proTip}>
            PRO TIP: consider that designs on small shirts will look much
            different than on an XL. Remember: a big print may not fit on
            smaller sizes. so bigger is not always better.
          </p>
        </div>
        <div className={styles.spVdtg}>
          <div className={styles.spVdtgWrapper}>
            <Image
              src={Spvdtg}
              alt="Screen Print VS DTG"
              height={223}
              width={426}
            />
          </div>
          <p>
            We USUALLY avoid screenprinting over seams, collars, and zippers SO
            THAT WE CAN HAVE a flat printing surface, BUT IF THAT&apos;s THE
            LOOK you&apos;re TRYING TO ACHIEVE, PLEASE SPECIFY. BE MINDFUL OF
            SEAMS AND FOLDS, AS INKS AND EMBROIDERY ACT DIFFERENTLY ON THOSE
            SURFACES AND MAY GIVE AN UNDESIRable EFFECT.
          </p>
        </div>
        <div className={styles.checkList}>
          <Image src={Otto} alt="Otto" height={215} width={215} />
          <p>
            ONCE YOUR PRINT READY CHECKLIST IS COMPLETE, We can start production
            after one of our team members approves the art.
          </p>
          <p>
            We understand that there may be certain steps or adjustments
            required to achieve the desired outcome, and we greatly appreciate
            your understanding and collaboration throughout the journey. The
            Merchbox team cannot provide creative guidance, but they may bring
            up technical recommendations if they see any concerns with your
            project.
          </p>
          <p>
            <u>
              Please note: an additional fee will be applied to changes made
              after being approved for production.
            </u>
          </p>
        </div>
        <div className={styles.thanks}>
          <Image src={TwoStars} alt="Two Stars" height={65} width={46} />
          <p>thanks for choosing merchbox :)</p>
          <p>we can&apos;t wait to bring your project to life!</p>
        </div>
      </div>
    </main>
  );
};

export default PrintPage;
