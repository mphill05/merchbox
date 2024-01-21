import { StaticImageData } from 'next/image';
import { Jelani, Jonnie, Justin, Lurtz, Mauricio, Nina, Steven } from '@/index';

interface TeamProps {
  image: StaticImageData;
  name: string;
  title: string;
  desc: string;
}

export const teamData: TeamProps[] = [
  {
    image: Lurtz,
    name: 'LURTZ',
    title: 'FINISHING SERVICES & DTG OPERATOR',
    desc: 'LURTZ MAKES SURE THE QUALITY OF THE FINISHED PRODUCTS ARE UP TO THE MERCHBOX STANDARD BEFORE THEY LEAVE THE HQ!',
  },
  {
    image: Jelani,
    name: 'JELANI',
    title: 'LOGISTICS MANAGER',
    desc: 'JELANI HANDLES SHIPPING, FULFILLMENT, and CUSTOMER SERVICE FOR our CLIENT WEBSITES, AND MAKES SURE their CUSTOMERS receive their products in a timely manner!',
  },
  {
    image: Justin,
    name: 'JUSTIN',
    title: 'CLIENT ONBOARDING',
    desc: 'JUSTIN IS AT THE FRONT LINES OF COMMUNICATION AND WILL reply to your CONTACT FORM request! he then COLLECTs ALL of THE NECESSARY ASSETS TO MAKE YOUR PROJECT COME TO LIFE!',
  },
  {
    image: Jonnie,
    name: 'JONNIE',
    title: 'OPERATIONS SPECIALIST',
    desc: `catch JONNIE OPERATing ALL OF OUR MACHINERy, MAKing YOUR DESIGNS become a reality! SHE'S GOT MANY YEARS OF EXPERIENCE, AND CAN PRINT ON ALL SORTS OF GARMENTS!`,
  },
  {
    image: Mauricio,
    name: 'mauricio',
    title: 'SCREEN PRINTING SPECIALIST & FINISHING SERVICES',
    desc: `MAURICIO IS A JACK OF ALL TRADES - WHEN HE ISN'T HELPING JONNIE ON THE SCREEN PRINTING MACHINE, YOU CAN FIND HIM ASSISTING LURTZ ON THE FINISHING SERVICES!`,
  },
  {
    image: Nina,
    name: 'nina',
    title: 'HUMAN RESOURCES',
    desc: 'NINA IS OUR HR MANAGER AND MAKES SURE OUR CREW IS ALWAYS HAPPY THROUGHOUT THE DAY!',
  },
  {
    image: Steven,
    name: 'steven',
    title: 'PROJECT MANAGER',
    desc: `STEVEN HAS BEEN WITH MERCHBOX FROM THE VERY BEGINNING AND OVERSEES THE ENTIRE HQ MAKING SURE EVERYTHING IS RUNNING ON SCHEDULE! HE'S SEEN AND DONE IT ALL, AND MERCHBOX WOULDN'T BE WHAT IT IS TODAY WITHOUT HIM!`,
  },
];
