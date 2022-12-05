import React from 'react';
import './App.scss';
import {BrowserRouter as  Router, Routes , Route} from 'react-router-dom';
import Layout from './components/Layout/Layout.js'
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home';
import WorkInProgress from './components/WorkInProgress/WorkInProgress';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes >
              <Route path="/" element={<Layout />}/>  
             {/*<Route index element={<Home/>}/>*/}
              <Route path="/about" element={<WorkInProgress/>}/>
              <Route path="/portofolio" element={<WorkInProgress/>}/>
              <Route path="/contact" element={<WorkInProgress/>}/>
            </Routes >
      </Router>
    </div>
  );
}

export default App;