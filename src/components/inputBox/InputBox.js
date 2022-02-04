import React, {useState} from "react"
import HidePassword from "../../icons/hide-password.png"
import "./InputBox.css"

export default function InputBox(props){

    const [showPassword, setShowPassword] = useState(!props.inputType === 'password');
    const showPwdIcon = require('../../icons/show-password.png')
    const hidePwdIcon = require('../../icons/hide-password.png')
    const togglePasswordVisibility = () => setShowPassword(visible => !visible)

    return(
        <div className="input-box">
            <img className="input-box-icon" src={props.icon}/>
            <input
                value={props.value} 
                name={props.name}
                autoComplete="off" 
                onChange={props.onChange} 
                type={showPassword ? 'text' : props.inputType} 
                className="input-box-text" 
                placeholder={props.placeholder}
            />
            {
                props.inputType=='password' && 
                <img 
                    className="input-box-icon" 
                    src={showPassword ? showPwdIcon : hidePwdIcon}
                    onClick={togglePasswordVisibility}
                />
            }
        </div>
    )
}