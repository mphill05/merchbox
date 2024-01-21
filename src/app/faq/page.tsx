import { Metadata } from 'next';
import FAQPageComponent from './FAQPageComponent';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'merchbox.info',
};

const FaqPage = () => {
  return <FAQPageComponent />;
};
export default FaqPage;
