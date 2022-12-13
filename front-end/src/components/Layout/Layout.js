import React from 'react';
import Loader from 'react-loaders'
import Home from '../Home/Home.js';
import Navbar from '../Navbar/Navbar.js';
import './Layout.scss';

const Layout = () => {
    return (
        <>
        <div className='App'>
            {/* <Navbar /> */}
            <div className='page'>
            <span className='top-html tag'>&lt;html&gt;</span>
            <span className='top-body tag'>&lt;body&gt;</span>
            <Home/>
            <span className="bottom-body tag">
                &lt;/body&gt;
                <br />
                <span className="bottom-html">&lt;/html&gt;</span>
            </span>
            </div>
        </div>
        <Loader type="ball-scale-ripple-multiple" />

        </>
    )
}
export default Layout;