import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Link as Link1 } from 'react-scroll';
import { signOutAction } from '../redux/actions/userAction';
import './header.css';

const Header = () => {
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
          Baby Store
        </NavLink>
      </div>
      <div className='nav-block'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <div className='dropdown'>
              <NavLink to='/'>
                Products <i className='bi bi-chevron-down' />{' '}
              </NavLink>

              <div className='dropdown-content'>
                <li>
                  <NavLink to='/'>
                    {' '}
                    <Link1
                      activeClass='active'
                      to='clothes'
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={100}
                    >
                      Clothes
                    </Link1>
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/'>
                    {' '}
                    <Link1
                      activeClass='active'
                      to='shoes'
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={100}
                    >
                      Shoes
                    </Link1>
                  </NavLink>
                </li>
              </div>
            </div>
          </li>

          <li>
            {userInfo ? (
              <div className='dropdown'>
                <NavLink to='/signin'>
                  <i className='bi bi-person-check' />
                  {userInfo.name}
                </NavLink>
                <div className='dropdown-content'>
                  <li>
                    <NavLink to='/' onClick={signOut}>
                      Sign Out
                    </NavLink>
                  </li>
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
    </div>
  );
};

export default Header;
