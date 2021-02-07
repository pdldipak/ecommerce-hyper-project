import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import { signOutAction } from '../redux/actions/userAction';
import './header.css';

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const userInfo = useSelector((state) => state.userSignIn.userInfo);

  const signOut = () => {
    dispatch(signOutAction());
  };

  return (
    <div className='navbar-container'>
      <div>
        <NavLink className='brand' to='/'>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
            alt='Baby Store'
            className='brand'
          />
        </NavLink>
      </div>
      <div>
        <ul className='nav-block' id={showLinks ? 'hidden' : ''}>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <div className='dropdown'>
              <NavLink to='/'>
                Products <i className='bi bi-chevron-down' />{' '}
              </NavLink>

              <div className='dropdown-content'>
                <div>
                  <Link
                    activeClass='active'
                    to='clothes'
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={500}
                  >
                    Clothes
                  </Link>
                </div>
                <div>
                  <Link
                    activeClass='active'
                    to='shoes'
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={100}
                  >
                    Shoes
                  </Link>
                </div>
              </div>
            </div>
          </li>

          <li>
            {userInfo ? (
              <div className='dropdown'>
                <NavLink to='/signin'>
                  <i className='bi bi-person' />
                  {userInfo.name}
                </NavLink>
                <div className='dropdown-content'>
                  <div>
                    <NavLink to='/orderhistory'>Orders</NavLink>
                  </div>
                  <div>
                    <NavLink to='/' onClick={() => signOut()}>
                      Sign Out
                    </NavLink>
                  </div>
                </div>
              </div>
            ) : (
              <NavLink to='/signin'>Account</NavLink>
            )}
          </li>
          <li>
            <NavLink to='/cart/:id?'>
              <i className='bi bi-bag-plus' />
              {cartItems.length > 0 && (
                <span className='display-items'>
                  {cartItems.length}
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/images/menu.png`}
        alt='Menu'
        className='menu-icon'
        onClick={() => setShowLinks(!showLinks)}
      />
    </div>
  );
};

export default Header;
