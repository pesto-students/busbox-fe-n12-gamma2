import React from "react";
import {getSeatIcon, getSleeperSeatIcon} from './utils'
import './BusSeat.css'

export default function BusSeat(props){
    const clName = props.isSleeper ? 'sleeper-seat' : 'normal-seat';
    return(
        <img className={clName} src={props.isSleeper ? getSleeperSeatIcon(props.status) : getSeatIcon(props.status)} />
    )
}