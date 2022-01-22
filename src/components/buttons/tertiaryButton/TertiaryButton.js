import React from 'react'
import './TertiaryButton.css'

export default function TertiaryButton(props){
    return (
        <button className='tertiary-button'>{props.text}</button>
    )
}
