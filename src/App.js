import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case "About": 
        return <About />
      case "Contact": 
        return <Contact />
    }
  };
return (
  <div>
  <Header />
  <About />
  <Contact />
  </div>
);
}


export default App;