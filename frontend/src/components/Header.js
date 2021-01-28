import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='navbar-container'>
      <div>
        <a className='brand' href='/'>
          Baby Store
        </a>
      </div>
      <div className='nav-block'>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Products</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Contact</a>
          </li>
          <li>
            <a href='/'>Account</a>
          </li>
        </ul>
      </div>
      <div>
        {' '}
        <a href='/'>
          <i
            className='bi bi-bag-plus'
            style={{ 'font-size': '3rem' }}
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
