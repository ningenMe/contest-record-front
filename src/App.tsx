import React from 'react';
import Header from './components/Header'
import Router from './components/Router'
import Footer from './components/Footer'

export const App: React.FC = () => {
    return (
      <>
        <Header />
        <Router />
        <Footer />
      </>
      );
    }
export default App