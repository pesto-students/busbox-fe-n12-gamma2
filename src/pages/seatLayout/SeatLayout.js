import React from "react"
import Heading from '../../components/heading/Heading';
import BusCard from "../../components/cards/busCard/BusCard";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import "./SeatLayout.css"
import BusSeat from "../../components/seat/BusSeat";


function getSleeperSeatRow(row){
    const rowNumber = row*6
    const getDeck = (a, b, c) => {
        return (
            <div className="sleeper-deck">
                <div className="sleeper-twin">
                    <BusSeat seatNumber={a} isSleeper={true}/>
                    <BusSeat seatNumber={b} isSleeper={true}/>
                </div>
                <BusSeat seatNumber={c} isSleeper={true}/>
            </div>
        )
    } 

    return(
        <div key={rowNumber} className="sleeper-row">
            {getDeck(rowNumber+1, rowNumber+2, rowNumber+3)}
            {getDeck(rowNumber+4, rowNumber+5, rowNumber+6)}
        </div>
    )
}

function getNormalSeatRow(row, showMiddleSeat=false){
    const rowNumber = row*4

    const getSide = (a, b) => {
        return (
            <div className="normal-twin">
                <BusSeat seatNumber={a} isSleeper={false}/>
                <BusSeat seatNumber={b} isSleeper={false}/>
            </div>
        )
    }
    return(
        <div key={row} className="normal-row">
            {getSide(rowNumber+1, rowNumber+2)}
            {showMiddleSeat && <BusSeat isSleeper={false}/>}
            {getSide(rowNumber+3, rowNumber+4)}
        </div>
    )
}

export default function SeatLayout(){
    const sleeperRows = [0,1,2,3,4,5,6] 
    const normalRows = [0,1,2,3,4,5,6,7,8,9,10];
    const isSleeper = true;
    const rows = isSleeper ? sleeperRows : normalRows;
    return(
        <div className="seat-layout">
            <div className="page-content">
                <Heading text="Select Seats"/>
                <BusCard />
                <div className="seats">
                    <div className="seat-info-container">
                        <div className="seat-info">
                            <BusSeat isSleeper={isSleeper} status='booked'/>
                            <p>Booked</p>
                        </div>
                        <div className="seat-info">
                            <BusSeat isSleeper={isSleeper} status='available'/>
                            <p>Available</p>
                        </div>
                        <div className="seat-info">
                            <BusSeat isSleeper={isSleeper} status='selected'/>
                            <p>Selected</p>
                        </div>
                        <div className="seat-info">
                            <BusSeat isSleeper={isSleeper} status='reserved'/>
                            <p>Reserved for Ladies</p>
                        </div>
                    </div>
                    {
                        <div className="deck-info">
                            <h4> Lower Deck </h4>
                            <h4> Upper Deck </h4>
                        </div>
                    }
                    {rows.map(
                        (row, index, array) => {
                            return isSleeper ? getSleeperSeatRow(row, index===(array.length-1))
                                : getNormalSeatRow(row, index===(array.length-1))
                        }
                    )}
                </div>
            </div>
            <SecondaryButton text="Book Selected Seats"/>
        </div>
    )
}