import { Metadata } from 'next';
import Layout from './landing/layout';

export const metadata: Metadata = {
  title: 'HOME | MERCHBOX',
  description: 'merchbox.info',
};

export default function Home() {
  return (
    <>
      <Layout />
    </>
  );
}
