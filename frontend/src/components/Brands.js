import React from 'react';
import './brand.css';

function Brands({ products }) {
  return (
    <div className='container'>
      <div className='row'>
        {products.map((product, index) => (
          <div className='col-2' key={index}>
            <img src={product} alt={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
