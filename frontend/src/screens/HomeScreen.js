import React, { useState, useEffect } from 'react';
import Brands from '../components/Brands';
import Offer from '../components/Offer';
import Product from '../components/Product';
//import data from '../data.json';
import axios from 'axios';
import Loading from '../components/atom/Loading';
import ErrorMessage from '../components/atom/ErrorMessage';

function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/api/products');
      setLoading(false);
      setProducts(data);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const clothes = products.filter(
    (product) => product.category === 'Cloth'
  );
  const shoes = products.filter(
    (product) => product.category === 'Shoes'
  );
  const offerProducts = products.filter(
    (product) => product.offer === 'Yes'
  );
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <div>
          {offerProducts.map((product) => (
            <Offer key={product._id} product={product} />
          ))}
          <div className='product-heading'>
            <h1>Feature Products: Clothes</h1>
          </div>
          <div className='products-container'>
            {clothes.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <div className='product-heading'>
            <h1>Feature Products: Shoes</h1>
          </div>
          <div className='products-container' id='cloth'>
            {shoes.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <div className='product-heading' id='brand'>
            <h1>Brand we trust so you</h1>
            <Brands />
          </div>
        </div>
      )}
    </>
  );
}

export default HomeScreen;
