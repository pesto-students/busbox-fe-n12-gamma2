import React from 'react'
import { useNavigate } from 'react-router-dom'
import TertiaryButton from '../../components/buttons/tertiaryButton/TertiaryButton'
import './NotFound.css'
import DesktopButton from '../../components/buttons/desktopButton/DesktopButton'

import useIsDesktop from '../../customHooks/useIsDesktop'
    
export default function NotFound(){

    const navigate = useNavigate();
    const isDesktop = useIsDesktop();
    const goHome = () => navigate('/');

    return (
        <div className="not-found">
            <div className="page-content not-found-content">
                <h2>Uhh, Oh..</h2>
                <img alt='No Bus' src={require('../../icons/bus-not-found.png')}/>
                <h2>No Buses Found</h2>
            </div>
            {isDesktop && 
                <div className='not-found-button-container'> 
                    <DesktopButton text="Back To Home" onClick = {goHome}/> 
                </div>
                }
            <div className='back-button-container'>
                {!isDesktop && <TertiaryButton onClick={goHome}text='Back To Home'/>}
            </div>
        </div>
    )
}