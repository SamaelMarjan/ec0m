import React from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const data = {
    name: "E-c0m",
  };

  return (
    <>
      <HeroSection myData={data} />
    </>
    );
}

export default Home;