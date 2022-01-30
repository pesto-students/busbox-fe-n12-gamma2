import React, { useState } from "react"
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import InputBox from '../../components/inputBox/InputBox';
import Heading from '../../components/heading/Heading';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import { authActions } from "../../state/index"
import {useNavigate} from 'react-router-dom'
import './SignIn.css'
import api from "../../axios/api";
import {isValidEmail} from '../commonUtils'
import snackbar from '../../components/snackbar/snackbarUtils'
import GoogleLogin from 'react-google-login'
export default function SignIn(){

    const navigate = useNavigate();
    const state = useSelector(state => state)
    const {setAccessToken} = bindActionCreators(authActions, useDispatch());

    const [credentials, setCredentials] = useState({
        email : "",
        password : ""
    })
    const handleChange = (event) => {
        setCredentials(prevCredentials => ({
            ...prevCredentials,
            [event.target.name] : event.target.value
        })) 
    }

    const signIn = () => {
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        if(!isValidEmail(credentials.email.trim().toLowerCase())){
            snackbar.error('Invalid email')
            return;
        }
        api.post('/auth/login', credentials)
        .then(result => {
            setAccessToken(result.data.accessToken);
            navigate('/');
        })
        .catch(error=> {
            // TODO :: handle API errors, show error pages
            console.log('error',error)
        })
    }

    const guestLogin = () => {
        api.post('/auth/login', {email: 'patilgajanan1807@gmail.com', password: 'Patil@123'})
        .then(result => {
            setAccessToken(result.data.accessToken);
            navigate('/');
        })
        .catch(error=> {
            // TODO :: handle API errors, show error pages
            console.log('error',error)
        })
    }

    const googleLoginSuccess = (data) => {
        console.log(data);
        api.post('auth/google-login', {idToken: data.tokenId}).then(result => {
            setAccessToken(result.data.accessToken);
            navigate('/');
        })
    }
    const googleLoginFailure = (err) => {
        console.log(err);
    }

    return(
        <div className="sign-in">
            <Heading text="Sign In"/>
            <InputBox
                onChange={handleChange}
                name='email'
                value={credentials.email}
                inputType = 'text' 
                placeholder="E-Mail ID" 
                icon={require("../../icons/email.png")}
            />    
            <InputBox
                onChange={handleChange}
                name='password'
                value={credentials.password}
                inputType = 'password' 
                placeholder="Password" 
                icon={require('../../icons/lock.png')}
            />


            <PrimaryButton text="Log In" onClick={signIn}/>
            <h2>OR</h2>

                <GoogleLogin
                    clientId="627334801362-oseeis0ec3hol4j45jd3uantinrrnp3v.apps.googleusercontent.com"
                    buttonText="Login With Google"
                    onSuccess={googleLoginSuccess}
                    onFailure={googleLoginFailure}
                    className="btn-google"
                />

            <div onClick={guestLogin} className="btn-guest">
                <img className="bottom-icons" src={require("../../icons/guest.png")} />
                <h4 className="txt-no-account">Guest User Login</h4>    
            </div>
            <h4>Don't have an account?
            <Link to="/signup"> Sign Up</Link></h4>
            
    </div>

    )
}