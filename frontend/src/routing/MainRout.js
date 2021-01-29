import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';

const MainRout = () => {
  return (
    <>
      <Switch>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/product/:id' component={ProductScreen} />
      </Switch>
    </>
  );
};

export default MainRout;
