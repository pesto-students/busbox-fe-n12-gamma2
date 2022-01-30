import React from 'react'
import BusSeat from '../../components/seat/BusSeat';

function getSeat(isSleeper, index, seatConfig) {
    const {seatStatuses, selectedSeats, selectSeat, deselectSeat} = seatConfig;
    const seatNumber = seatStatuses[index].seatNumber;
    const currentSeatStatus = selectedSeats.find(seat => seat.seatNumber === seatNumber);
    const isSelected = currentSeatStatus ? true : false;
    return (
        <BusSeat 
            status={seatStatuses[index].status} 
            seatNumber={seatNumber}
            isSleeper={isSleeper}
            selectSeat={selectSeat}
            deselectSeat={deselectSeat}
            isSelected = {isSelected}
        />
    )
} 

const getDeck = (a, b, c, seatConfig) => {
    return (
        <div className="sleeper-deck">
            <div className="sleeper-twin">
                {getSeat(true, a, seatConfig)}
                {getSeat(true, b, seatConfig)}
            </div>
            {getSeat(true, c, seatConfig)}
        </div>
    )
} 

function getSleeperSeatRow(seatConfig){
    const { row } = seatConfig;
    const rowNumber = row*6
    return(
        <div key={rowNumber} className="sleeper-row">
            {getDeck(rowNumber, rowNumber+1, rowNumber+2, seatConfig)}
            {getDeck(rowNumber+3, rowNumber+4, rowNumber+5, seatConfig)}
        </div>
    )
}

const getSide = (a, b, seatConfig) => {
    return (
        <div className="normal-twin">
            {getSeat(false, a, seatConfig)}
            {getSeat(false, b, seatConfig)}
        </div>
    )
}

function getNormalSeatRow(seatConfig){
    const { row, isLastRow } = seatConfig;
    const showMiddleSeat = isLastRow;
    const rowNumber = row*4
    return (
        <div key={row} className="normal-row">
            {getSide(rowNumber, rowNumber+1, seatConfig)}
            {showMiddleSeat && getSeat(false, b, seatConfig)}
            {getSide(rowNumber+2, rowNumber+3, seatConfig)}
        </div>
    )
}

function getSeatInfo(isSleeper){
    return (
        <div className="seat-info-container">
            <div className="seat-info">
                <BusSeat isSleeper={isSleeper} isDummy={true} status='booked'/>
                <p>Booked</p>
            </div>
            <div className="seat-info">
                <BusSeat isSleeper={isSleeper} isDummy={true} status='available'/>
                <p>Available</p>
            </div>
            <div className="seat-info">
                <BusSeat isSleeper={isSleeper} isDummy={true} status='selected'/>
                <p>Selected</p>
            </div>
            <div className="seat-info">
                <BusSeat isSleeper={isSleeper} isDummy={true} status='reserved for ladies'/>
                <p>Reserved for Ladies</p>
            </div>
        </div>
    )
}

export {getNormalSeatRow, getSleeperSeatRow, getSeatInfo}