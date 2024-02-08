import React from 'react';
/* import BookingOptions from './BookingOptions'; */
import Footer from '../Footer/Footer';
import Services from './Services';
import TopDestinations from './TopDestinations';
import MainLayout from './MainLayout';
import Reviews from './Reviews';

const HomePage = () => {
  return (
    <>
      <MainLayout/>
      <Services/>
      <TopDestinations/>
      <Reviews/>
      <Footer />
    </>
  );
};

export default HomePage;
