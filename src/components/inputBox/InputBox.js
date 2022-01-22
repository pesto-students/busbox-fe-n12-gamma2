import React from "react"
import "./InputBox.css"

export default function InputBox(props){

    const [showPassword, setShowPassword] = React.useState(props.inputType==='text');
    const showPwdIcon = require('../../icons/show-password.png')
    const hidePwdIcon = require('../../icons/hide-password.png')
    const togglePasswordVisibility = () => setShowPassword(visible => !visible)

    return(
        <div className="input-box">
            <img className="input-box-icon" src={props.icon}/>
            <input type={showPassword ? 'text': 'password'} className="input-box-text" placeholder={props.placeholder}/>
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