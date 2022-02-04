import React from 'react'
import BusSeat from '../../components/seat/BusSeat';

function getSeat(index, seatConfig) {
    const {
        isSleeper, selectedSeats, bookedSeats, 
        reservedForLadiesSeats, toggleSeatSelection
    } = seatConfig;
    const isBooked = bookedSeats.includes(index);
    const isSelected = selectedSeats.includes(index);
    const isReserved = reservedForLadiesSeats.includes(index); 
    return (
        <BusSeat 
            seatNumber={index}
            isSleeper={isSleeper}
            isBooked={isBooked}
            isReserved={isReserved}
            isSelected = {isSelected}
            onClick={toggleSeatSelection}
        />
    )
} 

const getDeck = (a, b, c, seatConfig) => {
    return (
        <div className="sleeper-deck">
            <div className="sleeper-twin">
                {getSeat(a, seatConfig)}
                {getSeat(b, seatConfig)}
            </div>
            {getSeat(c, seatConfig)}
        </div>
    )
} 

function getSleeperSeatRow(seatConfig){
    const { row } = seatConfig;
    const rowNumber = row*6
    return(
        <div key={rowNumber} className="sleeper-row">
            {getDeck(rowNumber+1, rowNumber+2, rowNumber+3, seatConfig)}
            {getDeck(rowNumber+4, rowNumber+5,rowNumber+6,  seatConfig)}
        </div>
    )
}

const getSide = (a, b, seatConfig) => {
    return (
        <div className="normal-twin">
            {getSeat(a, seatConfig)}
            {getSeat(b, seatConfig)}
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
            {showMiddleSeat && getSeat(rowNumber+4, seatConfig)}
            {getSide(rowNumber+2, rowNumber+3, seatConfig)}
        </div>
    )
}

const getSeatLayout = (seatConfig) => {
    const numberOfRows = seatConfig.numberOfRows;
    const rows = new Array(numberOfRows).fill(0).map((item, index) => index)
    return (
        rows.map( (row, index, array) => {
            seatConfig['row'] = row;
            seatConfig['isLastRow'] = index === array.length - 1;
            return seatConfig.isSleeper ? getSleeperSeatRow(seatConfig)
            : getNormalSeatRow(seatConfig) 
        }
    )
)}

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
                <BusSeat isSleeper={isSleeper} isDummy={true} status='reserved'/>
                <p>Reserved for Ladies</p>
            </div>
        </div>
    )
}

export {getSeatLayout, getSeatInfo}
// const seatConfig = {
//     row,
//     isLastRow: index === array.length - 1,
//     selectedSeats : selectedSeats,
//     selectSeat,
//     deselectSeat,
// }
