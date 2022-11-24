import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/LogoM.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faHome, faUser, faEnvelope, faPhone, faSuitcase, faBars, faClose } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    return (

        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt='logo' />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="get-toknow-me" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="portfolio" to="/portofolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
                </NavLink>
                <NavLink activeclassname="active" className="contact" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                </nav>

                <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/mihaelateodorof/' 
                        target={"_blank"} rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' className='contact-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/teodorofmihaela' 
                        target={"_blank"} rel="noreferrer">
                            <FontAwesomeIcon icon={faGithub} color='#4d4d4e' className='contact-icon'/>
                        </a>
                    </li>
                    <li>
                        <a href='tel:+40761324489' 
                        target={"_blank"} rel="noreferrer">
                            <FontAwesomeIcon icon={faPhone} color='#4d4d4e' className='contact-icon'/>
                        </a>
                    </li>
                </ul>

           
        </div>
    )
}
export default Navbar
