import React, { useState } from 'react';
import Brands from '../components/Brands';
import Offer from '../components/Offer';
import Product from '../components/Product';
import data from '../data.json';

function HomeScreen() {
  const [products, setProducts] = useState(data.products);

  const clothes = products.filter(
    (product) => product.category === 'Cloth'
  );
  const shoes = products.filter(
    (product) => product.category === 'Shoes'
  );
  const offerProducts = products.filter(
    (product) => product.offer === 'Yes'
  );
  return (
    <>
      {offerProducts.map((product) => (
        <Offer key={product._id} product={product} />
      ))}
      <div className='product-heading'>
        <h1>Feature Products: Shoes</h1>
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
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className='product-heading'>
        <h1>Brand we trust so you</h1>
        <Brands />
      </div>
    </>
  );
}

export default HomeScreen;
