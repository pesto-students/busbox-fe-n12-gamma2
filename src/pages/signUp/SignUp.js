import React from "react"
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import InputBox from '../../components/inputBox/InputBox';
import Heading from '../../components/heading/Heading';
import { Link } from 'react-router-dom';
import "./SignUp.css"


export default function SignUp(){
    return(
        <div className="sign-up">
            <Heading text="Sign Up"/>
            <InputBox
                inputType = 'text' 
                placeholder="Full Name"
                icon={require("../../icons/profile.png")}
            />
            <InputBox 
                inputType = 'text' 
                placeholder="E-Mail ID" 
                icon={require("../../icons/email.png")}
            />
            <InputBox
                inputType = 'password' 
                placeholder="Password" 
                icon={require("../../icons/lock.png")}
            />
            <InputBox 
                inputType = 'password' 
                placeholder="Confirm Password" 
                icon={require("../../icons/lock.png")}
            />
            <div className="sign-up-button">
                <PrimaryButton text="Sign Up"/>
            </div>
            <h2 className="or-text">OR</h2>
            <div className="btn-google">
                <img className="bottom-icons" src={require("../../icons/google.png")} />
                <h4 class="txt-no-account">Login With Google</h4>    
            </div>
            <div className="btn-guest">
            <img className="bottom-icons" src={require("../../icons/guest.png")} />
                <h4 class="txt-no-account">Guest User Login</h4>    
            </div>
            <h4>Already have an account?
                <Link to="/signin"> Sign In</Link>
            </h4>
        </div> 
    )
}
