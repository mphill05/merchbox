import type { Metadata } from 'next';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './styles/globals.scss';

export const metadata: Metadata = {
  title: {
    template: '%s | MERCHBOX',
    default: 'HOME | MERCHBOX',
  },
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
        <main className="mainContainer">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
