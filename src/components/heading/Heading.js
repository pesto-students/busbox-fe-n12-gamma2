import React from 'react'
import './Heading.css'
import useIsDesktop from '../../customHooks/useIsDesktop'

export default function Heading(props){

    const isDesktop = useIsDesktop();

    return (
        <h2 className={`heading${isDesktop ? ' desktop-heading' : ''}`}>{props.text}</h2>
    )
} 
