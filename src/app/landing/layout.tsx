import HomePage from './page';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HOME | MERCHBOX',
  description: 'merchbox.info',
};

const Layout = () => {
  return <HomePage />;
};

export default Layout;
