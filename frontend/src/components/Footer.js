import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import './footer.css';

const Footer = () => {
  return (
    <>
      <Link to='offer' smooth={true} offset={-70} duration={100}>
        <i
          className='bi bi-file-arrow-up-fill'
          style={{ fontSize: '4rem' }}
        />
      </Link>
      <div className='footer-container'>
        <div className='footer-col-1'>
          <h3>Availabe for Android and IOS</h3>
          <div className='app-logo'>
            <NavLink to='/'>
              <img
                src={`${process.env.PUBLIC_URL}/images/app-store.png`}
                alt='APP Store'
              />
            </NavLink>
            <NavLink to='/'>
              {' '}
              <img
                src={`${process.env.PUBLIC_URL}/images/play-store.png`}
                alt='Google Store'
              />
            </NavLink>
          </div>
        </div>
        <div className='footer-col-2'>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.jpg`}
            alt='Baby Store'
            className='logo'
          />
          <p>
            Our Purpose is to make sustainability in clothing
            industry, We only sell organic cotton clothes and shoes
            for children...
          </p>
        </div>
        <div className='footer-col-3'>
          <h3>Useful Links</h3>
          <ul>
            <li>Blog Post</li>
            <li>Return Policy</li>
            <li>News</li>
            <li>Blog Post</li>
          </ul>
        </div>
        <div className='footer-col-4'>
          <h3>Follow US</h3>
          <ul>
            <li>
              <i className='bi bi-facebook' />
            </li>
            <li>
              <i className='bi bi-instagram' />
            </li>
            <li>
              <i className='bi bi-twitter' />
            </li>
            <li>
              <i className='bi bi-youtube' />
            </li>
          </ul>
        </div>
      </div>
      <p>Copyright 2021 - BabyStore</p>
    </>
  );
};

export default Footer;
