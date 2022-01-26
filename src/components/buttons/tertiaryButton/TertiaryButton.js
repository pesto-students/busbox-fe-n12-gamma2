import React from 'react'
import './TertiaryButton.css'

export default function TertiaryButton(props){
    return (
        <button onClick={props.onClick}className='tertiary-button'>{props.text}</button>
    )
}
