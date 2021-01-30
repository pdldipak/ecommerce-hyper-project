import React from 'react';
import './brand.css';

function Brands() {
  return (
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-2'>
          <img
            src='images/freshlypicked.jpg'
            className='img-thumbnail'
            alt='freshlypicked'
          />
        </div>
        <div className='col-2'>
          <img
            src='images/goumi.jpg'
            className='img-thumbnail'
            alt='goumi'
          />
        </div>
        <div className='col-2'>
          <img
            src='images/hannaandersson.jpg'
            className='img-thumbnail'
            alt='hannaandersson'
          />
        </div>
        <div className='col-2'>
          <img
            src='images/oldnavy.jpg'
            className='img-thumbnail'
            alt='oldnavy'
          />
        </div>
        <div className='col-2'>
          <img
            src='images/tigerofsweden.jpg'
            className='img-thumbnail'
            alt='tigerofsweden'
          />
        </div>
      </div>
    </div>
  );
}

export default Brands;
