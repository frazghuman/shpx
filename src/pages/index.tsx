// pages/index.tsx

import React from 'react';
import RootLayout from '@/app/components/layout';
import Products from '@/app/components/home/products';
import HeroSection from '@/app/components/home/hero-section';

const Home = () => {
  return (
    <RootLayout>
      <HeroSection/>
      <Products/>
    </RootLayout>
  );
};

export default Home;
