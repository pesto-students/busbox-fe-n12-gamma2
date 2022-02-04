import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import getSidebarData from '../sidebarData';
import './Navbar.css';
import '../controller.css'
import {useDispatch, useSelector} from 'react-redux'
import api from '../../../axios/api';
import { bindActionCreators } from 'redux';
import { authActions } from '../../../state';
import snackbar from '../../../components/snackbar/snackbarUtils'
function Navbar () {

    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => setSidebar(shown => !shown);
    const auth = useSelector(state => state?.auth)
    const isSignedIn = auth.email || false;
    const navigate = useNavigate();
    const {clearAuthData} = bindActionCreators(authActions, useDispatch())

    const signOut = () => {
        api.post('/auth/logout').then(response => {
            if(response.status === 204){
                clearAuthData();
                toggleSidebar();
                snackbar.success("Signed out.");
                navigate('/');
            }
        })
    }

    return (
        <div className='mobile-navbar'>
             <div className="navbar">
                <img onClick={toggleSidebar} alt="Ham" className='navbar-icons' src={require("../../../icons/hamburger.png")}/>
                <Link to='/'>
                    <img alt="logo" className="logo-img"  src={require("../../../icons/busbox.png")}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li key={'toggle-icon'} className='navbar-toggle'>
                        <img onClick={toggleSidebar} className='navbar-icons' alt="Ham" src={require("../../../icons/back-arrow.png")}/>
                    </li>
                    {getSidebarData(isSignedIn).map((item, index) => {
                        return (
                            <li className='nav-text' key={`unique-${index}`} onClick={() => {toggleSidebar(); navigate(item.path)}}>
                                <img className='navbar-icons'  alt="Ham" src={item.icon}/>
                                <p >{item.title}</p>
                            </li>
                        );
                    })}
                    {isSignedIn && 
                        <li className='nav-text' key={'index-last'} onClick={signOut}>
                            <img style={{opacity: 0.6}} className='navbar-icons'  alt="Ham" src={require("../../../icons/log-out.png")}/>
                            <p> Sign Out </p>
                        </li>
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;