import  {useEffect, useState} from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import logo from '../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [bgChange, setBgChange] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50); 
      const heroHeight = document.querySelector('.hero').offsetHeight;
      setBgChange(window.scrollY > heroHeight); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);

  }

  return (
    <nav className={`container ${sticky ? 'sticky' : ''} ${bgChange ? 'blue-bg' : ''}`}>
    <img src={logo} alt="logo" className='logo'/>
   
    <ul className={mobileMenu?'' :'hide-mobile-menu'}>
    <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link ></li>
      <li><Link to="services" smooth={true} offset={-300} duration={500}>Services</Link ></li>
      <li><Link to="legalframe" smooth={true} offset={-310} duration={500}>Legal Framework</Link ></li>
      <li><Link to="About" smooth={true} offset={-260} duration={500}>About</Link ></li>
      <li><Link to="contact" smooth={true} offset={-150} duration={500} className="btn">Contact</Link ></li>
    </ul>
    <FontAwesomeIcon icon={faBars} className='menu_icon' onClick={toggleMenu}/>
   </nav>
  )
}

export default Navbar