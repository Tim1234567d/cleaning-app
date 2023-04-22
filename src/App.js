import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
// import Example from './components/example/Example';
import AboutCompany from './components/pages/aboutCompany/AboutCompany';
import { Route, Routes, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
      <Header/>
      <Routes>

        <Route path='/home' element={<Home/>}/>
        <Route path='/aboutCompany' element={<AboutCompany/>}/>

      </Routes>

      <Footer/>
      

    </div>
  );
}

export default App;
