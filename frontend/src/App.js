import React from 'react';
import './app.css';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div className='grid-container'>
      <header>
        <Header />
      </header>
      <main>Body part</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
