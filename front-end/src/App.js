import React from 'react';
import './App.scss';
import {BrowserRouter as  Router, Routes , Route} from 'react-router-dom';
import Layout from './components/Layout/Layout.js'
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes >
             <Route path="/" element={<Layout />}/>
             <Route index element={<Home/>}/>

            </Routes >
      </Router>
    </div>
  );
}

export default App;