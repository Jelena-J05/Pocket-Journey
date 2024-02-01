import React from 'react';
import HeroHome from './HeroHome';
/* import BookingOptions from './BookingOptions'; */
import Footer from './Footer';
import Services from './Services';
import TopDestinations from './TopDestinations';

const HomePage = () => {
  return (
    <>
      <HeroHome />
      {/* <BookingOptions /> */}
      <Services/>
      <TopDestinations/>
      <Footer />
    </>
  );
};

export default HomePage;
