import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './app.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddress from './screens/ShippingAddress';
import SigninScreen from './screens/SigninScreen';

const App = () => {
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header>
          <Header />
        </header>
        <main>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
          <Route path='/cart/:id?' component={CartScreen} />
          <Route path='/signin' component={SigninScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route path='/shipping' component={ShippingAddress} />
          <Route path='/payment' component={PaymentScreen} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
