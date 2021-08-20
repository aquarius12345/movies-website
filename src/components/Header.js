import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../images/infilzerLogo.png'


 const Header = () => {
    return (
        <nav className="header">
            <Link to='/'><img src={logo} alt="Logo" className ='Logo'/></Link>
            <div className="nav">
            
            <Link to='/nowplaying' className='link'>NOW PLAYING</Link>
             <Link to='/popular' className='link'>POPULAR</Link>
             <Link to='/top-rated' className='link'>TOP RATED</Link>
            </div>
           
          
           

        </nav>
            
        
    )
}

export default Header;
