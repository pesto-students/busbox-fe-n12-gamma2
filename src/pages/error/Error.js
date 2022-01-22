import React from 'react'
import TertiaryButton from '../../components/buttons/tertiaryButton/TertiaryButton'
import './Error.css'


export default function Error(){
    return (
        <div className="error">
            <div className="page-content error-content">
                <h2>Ooops..</h2>
                <img alt='No Bus' src={require('../../icons/error.png')}/>
                <h2>Something Went Wrong</h2>
            </div>
            <div className='back-button-container'>
                <TertiaryButton text='Go Back'/>
            </div>
        </div>
    )
}