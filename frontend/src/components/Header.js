import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='row'>
      <div>
        <a className='brand' href='/'>
          Shop Now
        </a>
      </div>
      <div>
        <a href='/cart'>Cart</a>
        <a href='/signin'>Sign In</a>
      </div>
    </div>
  );
};

export default Header;
