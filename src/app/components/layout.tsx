// components/RootLayout.tsx

import { Inter } from 'next/font/google';
import '../globals.css';
import Header from './header';
import Footer from './footer';
import QuotationSection from './home/quotation-section';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className={inter.className}>
      <Header/>
      {children}
      <Footer/>
      <QuotationSection/>
    </div>
  );
};

export default RootLayout;
