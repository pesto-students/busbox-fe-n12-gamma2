import React, { useState } from "react"
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import InputBox from '../../components/inputBox/InputBox';
import Heading from '../../components/heading/Heading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./SignUp.css"
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import {authActions} from '../../state/index'
import snackbar from '../../components/snackbar/snackbarUtils'
import {validateSignupData} from '../commonUtils'
import api from '../../axios/api'
import GoogleLogin from 'react-google-login'

export default function SignUp(){
    const {setSignupData, setAccessToken} = bindActionCreators(authActions, useDispatch());
    const navigate = useNavigate();
    const redirectBackTo = useLocation().state?.redirectBackTo;
    const [state, setState] = useState({
        name: '',
        email: '',
        password : '',
        confirmPassword: ''
    })

    const handleChange = event => {
        const {name, value} = event.target;
        setState(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const signup = () => {
        const error = validateSignupData(state);
        if(error) return snackbar.error(error);
        setSignupData(state);
        api.post('/auth/verify-email', {email: state.email}).then(response => {
            if(response?.status === 204){
                navigate('/signup/verify-email', {state: {redirectBackTo}})
            } else if (response.status === 409) {
                snackbar.error('User with this email already exists');
            }
        });
    }

    const googleLoginSuccess = (data) => {
        api.post('auth/google-login', {idToken: data.tokenId}).then(result => {
            snackbar.success('account created!');
            setAccessToken(result.data.accessToken);
            navigate(redirectBackTo || '/');
        }).catch(error => {
            console.log('google sign up error', error)
            navigate('/error');
        })
    }
    const googleLoginFailure = (err) => {
        console.log(err);
        navigate('/error');
    }

    return(
        <div className="sign-up">
            <Heading text="Sign Up"/>
            <InputBox
                placeholder="Full Name"
                inputType = 'text'
                name = 'name'
                value = {state.fullname} 
                onChange={handleChange}
                icon={require("../../icons/profile.png")}
            />
            <InputBox 
                placeholder="E-Mail ID" 
                inputType = 'text' 
                name = 'email'
                value = {state.email} 
                onChange={handleChange}
                icon={require("../../icons/email.png")}
            />
            <InputBox
                placeholder="Password" 
                inputType = 'password' 
                name = 'password'
                value = {state.password} 
                onChange={handleChange}
                icon={require("../../icons/lock.png")}
            />
            <InputBox 
                placeholder="Confirm Password" 
                inputType = 'password' 
                name = 'confirmPassword'
                value = {state.confirmPassword} 
                onChange={handleChange}
                icon={require("../../icons/lock.png")}
            />
            <div className="sign-up-button">
                <PrimaryButton onClick={signup} text="Sign Up"/>
            </div>
            <GoogleLogin
                clientId="627334801362-oseeis0ec3hol4j45jd3uantinrrnp3v.apps.googleusercontent.com"
                onSuccess={googleLoginSuccess}
                onFailure={googleLoginFailure}
                render={ renderProps => (
                    <div onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn-google-sign-up">
                        <img className="bottom-icons" src={require("../../icons/google.png")} />
                        <h4 className="txt-no-account">Sign Up With Google</h4>    
                    </div>
                )}
            />
            <h4>Already have an account?
            <span style={{cursor: 'pointer'}} onClick={() => navigate('/signin', {state: {redirectBackTo}})}> Sign In
                </span>
            </h4>
        </div> 
    )
}
