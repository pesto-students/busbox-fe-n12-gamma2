import React, { useState } from "react";
import {getSeatIcon, getSleeperSeatIcon} from './utils'
import './BusSeat.css'

export default function BusSeat(props){
    const {isSleeper, isSelected, isReserved, isBooked, isDummy} = props;
    const clName = isSleeper ? 'sleeper-seat' : 'normal-seat';
    const status = isDummy ? props.status :
        isBooked ? 
        'booked' : 
        isSelected ?
        'selected' :
        isReserved ? 
        'reserved' :
        'available'
    return(
        <img 
            className={clName} 
            src= { isSleeper 
                    ?   getSleeperSeatIcon(status) 
                    :   getSeatIcon(status)} 
            onClick={() => {
                if(!isDummy && !isBooked) props.onClick(props.seatNumber)
            }}
        />
    )
}

/*
    const toggleSelection = () => {
        console.log(props);
        console.log(status.toLowerCase());
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


*/