import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import sidebarData from './sidebarData';
import './Navbar.css';

function Navbar () {

    const [sidebar, setSidebar] = useState(false);
    
    const toggleSidebar = () => setSidebar(shown => !shown);

    return (
        <div className='navbar-container'>
             <div className="navbar">
                <img onClick={toggleSidebar} alt="Ham" className='navbar-icons' src={require("../../icons/hamburger.png")}/>
                <Link to='/'>
                    <img alt="logo" className="logo-img"  src={require("../../icons/busbox.png")}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li key={'toggle-icon'} className='navbar-toggle'>
                        <img onClick={toggleSidebar} className='navbar-icons' alt="Ham" src={require("../../icons/back-arrow.png")}/>
                    </li>
                    {sidebarData.map((item, index) => {
                        return (
                            <div key={index} onClick={toggleSidebar}>
                                <Link to={item.path} >
                                    <li className='nav-text' >         
                                        <img className='navbar-icons'  alt="Ham" src={item.icon}/>
                                        <p >{item.title}</p>
                                    </li>
                                </Link>
                            </div>
                        );
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;