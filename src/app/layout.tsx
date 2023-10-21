import Navbar from '../components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import type { Metadata } from 'next';
import '../globals.scss';
import '../customFonts.scss';

export const metadata: Metadata = {
  title: 'HOME | MERCHBOX',
  description: 'merchbox.info',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
