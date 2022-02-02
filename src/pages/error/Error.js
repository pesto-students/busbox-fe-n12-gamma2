import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TertiaryButton from '../../components/buttons/tertiaryButton/TertiaryButton'
import './Error.css'


export default function Error(){
    
    const navigate = useNavigate();
    const params = useParams();
    console.log(params);
    const goHome = () => navigate('/');
    return (
        <div className="error">
            <div className="page-content error-content">
                <h2>Ooops..</h2>
                <img alt='No Bus' src={require('../../icons/error.png')}/>
                <h2>Something Went Wrong</h2>
            </div>
            <div className='back-button-container'>
                <TertiaryButton onClick={goHome}text='Go Back'/>
            </div>
        </div>
    )
}