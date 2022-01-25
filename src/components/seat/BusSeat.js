import React, { useState } from "react";
import {getSeatIcon, getSleeperSeatIcon} from './utils'
import './BusSeat.css'

export default function BusSeat(props){
    const clName = props.isSleeper ? 'sleeper-seat' : 'normal-seat';
    const [isSelected, setIsSelected] = useState(false);
    const [status, setStatus] = useState(props.status);
    const initialStatus = props.status.toLowerCase()

    const toggleSelection = () => {
        console.log(props.seatNumber);
        if(props.isDummy || status.toLowerCase() === 'booked') return;
        setIsSelected(selected => {
            if(selected) {
                props.deselectSeat(props.seatNumber);
                setStatus(initialStatus)
            }
            else { 
                props.selectSeat(props.seatNumber);
                setStatus('Selected')
            }
            return !selected
        })
    }

    return(
        <img 
            className={clName} 
            src= { props.isSleeper 
                    ?   getSleeperSeatIcon(status) 
                    :   getSeatIcon(status)} 
            onClick={toggleSelection}
        />
    )
}