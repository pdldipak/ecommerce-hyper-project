import React from 'react';
import { Link as Link1 } from 'react-scroll';
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
            <a href='/'>
                Products
            </a>
          </li>
          <li>
            <a href='/'>
              {' '}
              <Link1
                activeClass='active'
                to='cloth'
                spy={true}
                smooth={true}
                offset={-70}
                duration={100}
              >
                Shoes
              </Link1>
            </a>
          </li>
          <li>
            <a href='/'>Account</a>
          </li>
          <li>
            <a href='/'>
              <i
                className='bi bi-bag-plus'
                style={{ 'font-size': '2.5rem' }}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
