import React from 'react';
import Fade from 'react-reveal/Fade';
import './offer.css';

function Offer({ product }) {
  return (
    <Fade top>
      <div className='offer-row' key={product._id}>
        <div className='offer-col-2'>
          <h1>
            Special off for newly born baby
            <br />
            For Limited time
          </h1>
          <p>
            Anim culpa et proident ut mollit minim in ad nisi Lorem
            minim ullamco ea sunt. Consequat voluptate anim labore eu
            anim fugiat sit ullamco esse exercitation exercitation
            cupidatat exercitation. Ex qui laboris ad officia occaecat
            excepteur cillum ad. <br /> Cillum anim labore occaecat
            dolor. Dolore reprehenderit elit dolore id in adipisicing.
            Fugiat Lorem veniam in consectetur occaecat occaecat in
            voluptate dolore ut adipisicing quis. Commodo nisi qui
            duis deserunt fugiat exercitation id deserunt labore
            mollit ex aute
          </p>
          <div>
            <a href={`/product/${product._id}`}>
              <button className='btn-special'>
                Buy Now
                <span>
                  <i className='bi bi-arrow-right' />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className='offer-col-2'>
          <img src={product.image} alt={product.name} />
        </div>
      </div>
    </Fade>
  );
}

export default Offer;
