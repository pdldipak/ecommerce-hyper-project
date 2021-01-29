import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './app.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header>
          <Header />
        </header>
        <main>
          <HomeScreen />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
