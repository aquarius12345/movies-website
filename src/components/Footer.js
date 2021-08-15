import React from 'react'
import './Footer.css'
import logo from '../images/infilzerLogo 22.png'
import icon from '../images/giticon.png'
import { Link } from 'react-router-dom';

 const Footer = () => {
    return (
        <footer className='footer'>
            <div className='menu'>
             <Link to='/'><img src={logo} alt="Logo" className ='Logo'/></Link>
             <Link to='/movies' className='link'>MOVIES</Link>
             <Link to='/popular' className='link'>POPULAR</Link>
             <Link to='/top-rated' className='link'>TOP RATED</Link>
             <br></br>
            </div>
             
             <div className='devs'>
             <h6>Developed by</h6>
            <a href="https://github.com/aquarius12345"><img src={icon} alt='iconegithub'/>Debora Seo </a> and <a href="https://github.com/devkadu"><img src={icon} alt='iconegithub'/>Carlos Eduardo</a>
            <h6>in Ironhack Web Development bootcamp 2021</h6>

             </div>
             
            
        </footer>
    )
}

export default Footer;