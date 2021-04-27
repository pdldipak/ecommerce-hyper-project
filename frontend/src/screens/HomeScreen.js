import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Brands from '../components/Brands';
import Offer from '../components/Offer';
import Product from '../components/Product';
import Loading from '../components/atom/Loading';
import ErrorMessage from '../components/atom/ErrorMessage';
import { productsListAction } from '../redux/actions/productsActions';

function HomeScreen() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { loading, products, error } = productsList;

  useEffect(() => {
    dispatch(productsListAction());
  }, [dispatch]);

  const clothes = products.filter(
    (product) => product.category === 'Cloth'
  );
  const shoes = products.filter(
    (product) => product.category === 'Shoes'
  );
  const offerProducts = products.filter(
    (product) => product.offer === 'Yes'
  );

  const brandLogo = [
    ...new Set(products.map((product) => product.logo)),
  ];
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <div>
          <div className='products-container'>
            {offerProducts.map((product) => (
              <Offer key={product._id} product={product} />
            ))}
          </div>
          <div className='product-heading' id='clothes'>
            <h1>Feature Products: Clothes</h1>
          </div>
          <div className='products-container'>
            {clothes.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <div className='product-heading' id='shoes'>
            <h1>Feature Products: Shoes</h1>
          </div>
          <div className='products-container'>
            {shoes.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <div className='product-heading' id='brand'>
            <h1>Brand we trust so you</h1>
            <Brands products={brandLogo} />
          </div>
        </div>
      )}
    </>
  );
}

export default HomeScreen;
