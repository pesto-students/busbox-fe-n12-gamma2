import React from 'react'
import { useNavigate } from 'react-router-dom'
import TertiaryButton from '../../components/buttons/tertiaryButton/TertiaryButton'
import './NotFound.css'


export default function NotFound(){

    const navigate = useNavigate();

    const goHome = () => navigate('/');

    return (
        <div className="not-found">
            <div className="page-content not-found-content">
                <h2>Uhh, Oh..</h2>
                <img alt='No Bus' src={require('../../icons/bus-not-found.png')}/>
                <h2>No Buses Found</h2>
            </div>
            <div className='back-button-container'>
                <TertiaryButton onClick={goHome}text='Back to Home'/>
            </div>
        </div>
    )
}