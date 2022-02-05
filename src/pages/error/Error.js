import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TertiaryButton from '../../components/buttons/tertiaryButton/TertiaryButton'
import './Error.css'
import DesktopButton from '../../components/buttons/desktopButton/DesktopButton'
import useIsDesktop from '../../customHooks/useIsDesktop'

export default function Error(){
    
    const navigate = useNavigate();
    const isDesktop = useIsDesktop();
    const params = useParams();
    const goHome = () => navigate('/');
    return (
        <div className="error">
            <div className="page-content error-content">
                <h2>Ooops..</h2>
                <img alt='No Bus' src={require('../../icons/error.png')}/>
                <h2>Something Went Wrong</h2>
            </div>
            {isDesktop && 
                <div className='error-button-container'> 
                    <DesktopButton text="Back To Home" onClick = {goHome}/> 
                </div>
            }
            <div className='back-button-container'>
                {!isDesktop && <TertiaryButton onClick={goHome}text='Back To Home'/>}
            </div>
        </div>
    )
}