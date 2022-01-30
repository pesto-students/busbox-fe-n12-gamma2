import React, { useState } from "react"
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import InputBox from '../../components/inputBox/InputBox';
import Heading from '../../components/heading/Heading';
import { Link, useNavigate } from 'react-router-dom';
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

        api.post('/auth/signup', state).then(result => {
            if(result.status === 201){
                snackbar.success('Account Created! redirecting to SignIn page');
                navigate('/signin')
            }
        })
    }

    const googleLoginSuccess = (data) => {
        console.log(data);
        api.post('auth/google-login', {idToken: data.tokenId}).then(result => {
            snackbar.success('account created!');
            setAccessToken(result.data.accessToken);
            navigate('/');
        })
    }
    const googleLoginFailure = (err) => {
        console.log(err);
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
            <h2 className="or-text">OR</h2>
            {/* <div className="btn-google">
                <img className="bottom-icons" src={require("../../icons/google.png")} />
                <h4 class="txt-no-account">Signup with Google</h4>    
            </div> */}
            <GoogleLogin
                clientId="627334801362-oseeis0ec3hol4j45jd3uantinrrnp3v.apps.googleusercontent.com"
                buttonText="Login With Google"
                onSuccess={googleLoginSuccess}
                onFailure={googleLoginFailure}
                className="btn-google"
            />
            <h4>Already have an account?
                <Link to="/signin"> Sign In</Link>
            </h4>
        </div> 
    )
}