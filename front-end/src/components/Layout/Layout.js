import { Outlet } from 'react-router-dom';
import Loader from 'react-loaders'
import Home from '../Home/Home.js';
import Navbar from '../Navbar/Navbar.js';
import './Layout.scss';

const Layout = () => {
    return (
        <>
        <div className='App'>
            <Navbar />
            <div className='page'>
            <span className='top-body tag'>&lt;body&gt;</span>
            <Outlet />
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