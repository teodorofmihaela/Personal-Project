import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/Logo.jpg'
import HomeIcon from '@mui/icons-material/Home';

const Navbar = () => {

    return (

        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt='logo' />
            </Link>
            <nav>
                <NavLink exact="true"
                    activeclassname="active" to="/">
                    <i icon={HomeIcon} color="#4d4d4e" />
                </NavLink>
            </nav>
        </div>
    )
}
export default Navbar
