import React, { useState } from 'react';
import './app.css';
import data from './data.json';
import Footer from './components/Footer';
import Header from './components/Header';
import Product from './components/Product';
import Offer from './components/Offer';
import Shoe from './components/Shoe';
import Brands from './components/Brands';

const App = () => {
  const [clothes, setClothes] = useState(data.clothes);
  const [shoes, setShoes] = useState(data.shoes);
  return (
    <div className='grid-container'>
      <header>
        <Header />
      </header>
      <main>
        <Offer />
        <div className='product-heading'>
          <h1>Feature Products: Clothes</h1>
        </div>
        <div className='products'>
          {clothes.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <div className='product-heading'>
          <h1>Feature Products: Shoes</h1>
        </div>
        <div className='products'>
          {shoes.map((product) => (
            <Shoe key={product._id} product={product} />
          ))}
        </div>
        <div className='product-heading'>
          <h1>Brand we trust so you</h1>
          <Brands />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
