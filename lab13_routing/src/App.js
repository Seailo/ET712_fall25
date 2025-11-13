import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Navbars from './components/navbars';

function App() {
  return (
    <>
    <h1 className="title">React Routing by, Andrew Murray</h1>
    <BrowserRouter>
    <Navbars/>
    <Routes>

      <Route path ='/' element= {<Home />} />
      <Route path ='/' element= {<About />} />
      <Route path ='/' element= {<Contact />} />
      </Routes>
      </BrowserRouter>
   
    </>
  );
}



export default App;
