import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/infilzerLogo.png'
import icone from "../images/filme.png"

 const Header = () => {
    return (
        <nav className="header">
            <Link to='/'><img src={logo} alt="Logo" className ='Logo'/></Link>
            <div className="nav">
            
            <Link to='/movies' className='link'>MOVIES</Link>
            </div>
           
          
           

        </nav>
            
        
    )
}

export default Header;
