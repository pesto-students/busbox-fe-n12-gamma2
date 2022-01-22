import React from "react"
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import InputBox from '../../components/inputBox/InputBox';
import Heading from '../../components/heading/Heading';
import { Link } from 'react-router-dom';
import './SignIn.css'


export default function SignIn(){
    
    return(
        <div className="sign-in">
            <Heading text="Sign In"/>
            <InputBox
                inputType = 'text' 
                placeholder="E-Mail ID" 
                icon={require("../../icons/email.png")}
            />    
            <InputBox
                inputType = 'password' 
                placeholder="Password" 
                icon={require('../../icons/lock.png')}
            />

            <a className="forgot-pswd">Forgot your Password?</a>

            <PrimaryButton text="Log In" />
            <h2 className="or-txt">OR</h2>

            <div className="btn-google">
                <img className="bottom-icons" src={require("../../icons/google.png")} />
                <h4 className="txt-no-account">Login With Google</h4>    
            </div>

            <div className="btn-guest">
                <img className="bottom-icons" src={require("../../icons/guest.png")} />
                <h4 className="txt-no-account">Guest User Login</h4>    
            </div>
            <h4>Don't have an account?
            <Link to="/signup"> Sign Up</Link></h4>
            
    </div>

    )
}
