import React from 'react';
import Router from './components/Router'
import Header from './components/Header'

export const App: React.FC = () => {
    return (
      <>
        <Header />
        <Router />
      </>
      );
    }
export default App