import React from 'react';
/* import BookingOptions from './BookingOptions'; */
import Footer from './Footer/Footer';
import Services from './Services';
import TopDestinations from './TopDestinations';
import MainLayout from './MainLayout/MainLayout';

const HomePage = () => {
  return (
    <>
      <MainLayout/>
      <Services/>
      <TopDestinations/>
      <Footer />
    </>
  );
};

export default HomePage;
