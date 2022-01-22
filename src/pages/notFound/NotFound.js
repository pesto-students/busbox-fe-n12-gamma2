import React from 'react'
import TertiaryButton from '../../components/buttons/tertiaryButton/TertiaryButton'
import './NotFound.css'


export default function NotFound(){
    return (
        <div className="not-found">
            <div className="page-content not-found-content">
                <h2>Uhh, Oh..</h2>
                <img alt='No Bus' src={require('../../icons/bus-not-found.png')}/>
                <h2>No Buses Found</h2>
            </div>
            <div className='back-button-container'>
                <TertiaryButton text='Go Back'/>
            </div>
        </div>
    )
}