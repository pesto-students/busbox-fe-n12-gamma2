import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import getSidebarData from '../sidebarData';
import './WebNavbar.css';
import '../controller.css'
import {useDispatch, useSelector} from 'react-redux'
import api from '../../../axios/api';
import { bindActionCreators } from 'redux';
import {authActions} from '../../../state/index'
import snackbar from '../../snackbar/snackbarUtils'

function WebNavbar () {

    const auth = useSelector(state => state?.auth)
    const isSignedIn = auth.email || false;
    const {clearAuthData} = bindActionCreators(authActions, useDispatch())
    const navigate = useNavigate();

    const signOut = () => {
        api.post('/auth/logout').then(response => {
            if(response.status === 204){
                clearAuthData();
                snackbar.success("Signed out.");
                navigate('/');
            }
        })
    }
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
                        {isSignedIn && 
                            <li onClick={signOut} className='web-nav-text' >         
                                <p> Sign Out </p>
                            </li>                    
                        }
                    </ul>
                </nav>
               
            </div>
        </div>
    )
}

export default WebNavbar;