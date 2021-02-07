import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './app.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CartScreen from './screens/CartScreen';
import ConformOrderScreen from './screens/ConformOrderScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentScreen from './screens/PaymentScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddress from './screens/ShippingAddress';
import SigninScreen from './screens/SigninScreen';
import UserOrderHistoryScreen from './screens/UserOrderHistoryScreen';

const App = () => {
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/cart/:id?' component={CartScreen} />
            <Route path='/signin' component={SigninScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/shipping' component={ShippingAddress} />
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/placeholder' component={OrderScreen} />
            <Route path='/order/:id' component={ConformOrderScreen} />
            <Route path='/orderhistory' component={UserOrderHistoryScreen} />

            
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
