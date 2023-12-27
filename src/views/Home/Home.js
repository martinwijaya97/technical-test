import React from 'react';
import Banner from '../../components/Banner';
import Product from '../../components/Product';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar';

const Home = () => {
  return (
    <div>
      <CartModal />
      <Header />
      <Banner />
      <Product />
      <Sidebar />
    </div>
  );
};

export default Home;
