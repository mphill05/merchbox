import React from 'react';
import styles from './page.module.scss';
import Image from 'next/image';

const PrintPage = () => {
  return (
    <main className={styles.main}>
      <div>
        <h3 className={styles.topHeader}>
          GETTING YOUR ART READY FOR PRODUCTION
        </h3>
        <p>
          Use a vector-based program for designing your art to ensure its
          resolution is independent and can be resized without pixelation
        </p>
      </div>
      <div className={styles.fileFormats}>
        <p>ACCEPTED FILE FORMATS:</p>
        <div className={styles.formats}>
          <Image
            src={'/fileTypes.webp'}
            alt="File Types"
            height={25}
            width={100}
          />
        </div>
      </div>
      <div className={styles.criteria}>
        <p>
          Convert all text to vectorized outlines. Avoid using converter
          websites online, We recommend Adobe Illustrator to vectorize files.
        </p>
        <p>
          We will not accept screenshots, compressed images or any
          low-resolution art. If you see fuzzy edges on your sharp”edges, that
          Is how it will print on your garment. Using lower resolution images
          with DTG especially may result in visible “artifacts” and “blocks” in
          the print.
        </p>
        <p>
          ARTWORK MUST BE 300 DPI or higher resolution, 3000 x 3000 pixels or
          higher is a good canvas size for most projects
        </p>
      </div>
      <div className={styles.merchBoxLq}>
        <Image src={'/merchboxlq.webp'} alt="Logo LQ" height={50} width={100} />
      </div>
      <div className={styles.coloring}>
        <p>
          Pantone+ SOLID COATED colors are used to match inks for screen
          printing, NOT HEX COLORS. IF YOU DON'T SPECIFY THE EXACT PANTONE+
          SOLID COATED COLOR, We will match your art to the closest Pantone+
          SOLID COATED coloR. Please note: a custom color may need to be made to
          best match your art for an additional cost.
        </p>
      </div>
      <div className={styles.pantone}>
        <Image
          src={'/mbPantone.webp'}
          alt="MB Pantone"
          height={50}
          width={100}
        />
        <p>
          COLOR ON MOCK UP: HEX #e9cea3 CLOSEST PANTONE+ SOLID COATED COLOR:
          PANTONE 177 C
        </p>
      </div>
      <div className={styles.colorMode}>
        <p>COLOR MODE SETTING MUST BE SET TO CMYK, we will not accept rgb</p>
        <Image src={'/rgbcmyk.webp'} alt="RGB CMYK" height={50} width={100} />
      </div>
      <div className={styles.printDimensions}>
        <p>
          Specify YOUR print dimensions in inches AND Provide detailed placement
          instructions WHEN SUBMITTING YOUR ARTWORK. If you do not specify, we
          will run with industry-standard placements BASED ON YOUR MOCK UP.
        </p>
        <p>two inches below the collar, center chest position</p>
        <Image
          src={'/printDimensions.webp'}
          alt="T-Shirt"
          height={100}
          width={100}
        />
        <p>1/2 INCH ABOVE LEFT SLEEVE INSEAM, CENTERED ON SLEEVE </p>
        <p>
          PRO TIP: consider that designs on small shirts will look much
          different than on an XL. Remember: a big print may not fit on smaller
          sizes. so bigger is not always better.
        </p>
      </div>
      <div className={styles.spVdtg}>
        <Image
          src={'/spVdtg.webp'}
          alt="Screen Print VS DTG"
          height={100}
          width={100}
        />
        <p>
          We USUALLY avoid screenprinting over seams, collars, and zippers SO
          THAT WE CAN HAVE a flat printing surface, BUT IF THAT's THE LOOK
          you're TRYING TO ACHIEVE, PLEASE SPECIFY. BE MINDFUL OF SEAMS AND
          FOLDS, AS INKS AND EMBROIDERY ACT DIFFERENTLY ON THOSE SURFACES AND
          MAY GIVE AN UNDESIRable EFFECT.
        </p>
      </div>
      <div className={styles.checkList}>
        <Image src={'/otto.png'} alt="Otto" height={100} width={100} />
        <p>
          ONCE YOUR PRINT READY CHECKLIST IS COMPLETE, We can start production
          after one of our team members approves the art. We understand that
          there may be certain steps or adjustments required to achieve the
          desired outcome, and we greatly appreciate your understanding and
          collaboration throughout the journey. The Merchbox team cannot provide
          creative guidance, but they may bring up technical recommendations if
          they see any concerns with your project. ​ Please note: an additional
          fee will be applied to changes made after being approved for
          production.
        </p>
      </div>
      <div className={styles.thanks}>
        <Image src={'/twoStars.png'} alt="Two Stars" height={100} width={100} />
        <p>thanks for choosing merchbox :)</p>
        <p>we can't wait to bring your project to life!</p>
      </div>
    </main>
  );
};

export default PrintPage;
