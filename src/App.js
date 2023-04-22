import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Example from './components/example/Example';

function App() {
  return (
    <div className="App">
      {/* <Example/> */}
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
