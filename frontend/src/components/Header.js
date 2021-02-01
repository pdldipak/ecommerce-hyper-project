import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link as Link1 } from 'react-scroll';
import './header.css';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  return (
    <div className='navbar-container'>
      <div>
        <NavLink className='brand' to='/'>
          Baby Store
        </NavLink>
      </div>
      <div className='nav-block'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/'>Products</NavLink>
          </li>
          <li>
            <NavLink to='/'>
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
            </NavLink>
          </li>
          <li>
            <NavLink to='/'>Account</NavLink>
          </li>
          <li>
            <NavLink to='/cart/:id?'>
              <i
                className='bi bi-bag-plus'
                style={{ 'font-size': '2.5rem' }}
              />
              {cartItems.length > 0 && (
                <span className='display-items'>{cartItems.length}</span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
