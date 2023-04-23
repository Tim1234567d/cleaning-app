import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import AboutCompany from './components/pages/aboutCompany/AboutCompany';
import AllServices from './components/pages/services/allServicePage';
import ServiceDetail from "./components/home/services/ServiceDetail"
import { Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
    
      <Header/>
      <Routes>

        <Route path='/home' element={<Home/>}/>
        <Route path='/services' element={<AllServices/>}/>
        <Route path='/aboutCompany' element={<AboutCompany/>}/>
        <Route path="/serviceDetail/:id" element = {<ServiceDetail/> } />
        
      </Routes>

      <Footer/>
      

    </div>
  );
}

export default App;
