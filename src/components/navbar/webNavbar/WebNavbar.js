import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import getSidebarData from '../sidebarData';
import './WebNavbar.css';
import '../controller.css'
import {useSelector} from 'react-redux'

function WebNavbar () {

    const auth = useSelector(state => state?.auth)
    const isSignedIn = auth.email || false;

    return (
        <div className='web-controller'>
             <div className="web-navbar">
                <Link to='/'>
                    <img alt="logo" className="web-logo-img"  src={require("../../../icons/busbox.png")}/>
                </Link>
                <nav className='web-nav-menu-active'>
                
                    <ul className='web-nav-menu-items'>
                       
                        {getSidebarData(isSignedIn).map((item, index) => {
                            return (
                                <div key={index} >
                                    <Link to={item.path} >
                                        <li className='web-nav-text' >         
                                            <p >{item.title}</p>
                                        </li>
                                    </Link>
                                </div>
                            );
                        })}
                        {/* <Link to='/'>
                            <img alt="logo" className="web-logo-img"  src={require("../../../icons/guest.png")}/>
                        </Link> */}
                    </ul>
                </nav>
               
            </div>
        </div>
    )
}

export default WebNavbar;