import React from 'react';
import { Box } from '@mui/material';
import Navbar from './widget/navbar';
import Hero from './widget/hero';
import Products from './widget/products';
import About from './widget/about';
import Contact from './widget/contact';
import Footer from './widget/footer';
const Home = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      {/* <Products /> */}
      <About />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Home;