import { Metadata } from 'next';
import ContactPageComponent from './ContactPageComponent';

export const metadata: Metadata = {
  title: 'CONTACT',
  description: 'merchbox.info',
};

const ContactPage = () => {
  return <ContactPageComponent />;
};

export default ContactPage;
