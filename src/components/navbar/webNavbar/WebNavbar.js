import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import sidebarData from '../sidebarData';
import './WebNavbar.css';
import '../controller.css'

function WebNavbar () {


    return (
        <div className='web-controller'>
             <div className="web-navbar">
                <Link to='/'>
                    <img alt="logo" className="web-logo-img"  src={require("../../../icons/busbox.png")}/>
                </Link>
                <nav className='web-nav-menu-active'>
                
                    <ul className='web-nav-menu-items'>
                       
                        {sidebarData.map((item, index) => {
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
                        <Link to='/'>
                            <img alt="logo" className="web-logo-img"  src={require("../../../icons/guest.png")}/>
                        </Link>
                    </ul>
                </nav>
               
            </div>
        </div>
    )
}

export default WebNavbar;