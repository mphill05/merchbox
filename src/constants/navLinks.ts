import { StaticImageData } from 'next/image';
import { Contact, Faq, IG, Merchbox, PrintReady, TikTok } from '@/index';
import {
  CONTACT_PAGE_PATH,
  FAQ_PAGE_PATH,
  HOME_PAGE_PATH,
  PRINT_READY_PAGE_PATH,
} from './routes';

interface NavProps {
  name: string;
  path: string;
  icon: StaticImageData;
  width: number;
  height: number;
  className?: string;
}

export const NavLinks: NavProps[] = [
  {
    name: 'Home',
    path: HOME_PAGE_PATH,
    icon: Merchbox,
    width: 666,
    height: 111,
  },
  {
    name: 'Print Ready',
    path: PRINT_READY_PAGE_PATH,
    icon: PrintReady,
    width: 203,
    height: 156,
    className: 'Print',
  },
  {
    name: 'FAQ',
    path: FAQ_PAGE_PATH,
    icon: Faq,
    width: 131,
    height: 97,
    className: 'FAQ',
  },
  {
    name: 'Contact',
    path: CONTACT_PAGE_PATH,
    icon: Contact,
    width: 216,
    height: 99,
    className: 'Contact',
  },
];

interface SocialLinkProps {
  name: string;
  icon: StaticImageData;
  link: string;
  className: string;
}

export const SocialLinks: SocialLinkProps[] = [
  {
    name: 'Instagram',
    icon: IG,
    link: 'https://www.instagram.com/merchbox/',
    className: 'instagram',
  },
  {
    name: 'TikTok',
    icon: TikTok,
    link: 'https://www.tiktok.com/@merchbox_la',
    className: 'tiktok',
  },
];
