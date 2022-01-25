import React, { useState } from "react"
import Heading from '../../components/heading/Heading';
import BusCard from "../../components/cards/busCard/BusCard";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import "./SeatLayout.css"
import BusSeat from "../../components/seat/BusSeat";
import { useLocation, useNavigate } from "react-router-dom";
import {getNormalSeatRow, getSleeperSeatRow} from './seatLayoutUtils'

export default function SeatLayout(){
    const sleeperRows = [0,1,2,3,4,5,6] 
    const normalRows = [0,1,2,3,4,5,6,7,8,9,10];
    const state = useLocation().state;
    const selectedBus = state.selectedBus;
    const isSleeper = selectedBus.isSleeper;
    const rows = isSleeper ? sleeperRows : normalRows;
    const navigate = useNavigate();
    const [selectedSeats, setSelectedSeats] = useState([]);

    const selectSeat = (seatNumber) => {
        setSelectedSeats(prev => {
            const filtered = prev.filter(prevSeatNumber => prevSeatNumber !== seatNumber)
            return [...filtered, seatNumber]
        })
    }

    const deselectSeat = (seatNumber) => {
        setSelectedSeats(prev => {
            const filtered = prev.filter(prevSeatNumber => prevSeatNumber !== seatNumber)
            return filtered;
        })
    }

    const bookSelectedSeats = () => {
        console.log(selectedSeats);
        navigate('/city-location',{
            state: {...state, selectedSeats}
        })
    }


    return(
        <div className="seat-layout">
            <div className="page-content">
                <Heading text="Select Seats"/>
                <BusCard 
                    bus={state.selectedBus}
                    sourceCityName={state.route.sourceCity.cityName}
                    destinationCityName={state.route.destinationCity.cityName}
                    onClick={() => console.log('bus card clicked!')}
                />
                <div className="seats">
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
                    {
                        <div className="deck-info">
                            <h4> Lower Deck </h4>
                            <h4> Upper Deck </h4>
                        </div>
                    }
                    {rows.map(
                        (row, index, array) => {
                            const seatConfig = {
                                row,
                                isLastRow: index === array.length - 1,
                                seatStatuses: selectedBus.seatStatuses,
                                selectSeat,
                                deselectSeat
                            }
                            return isSleeper ? getSleeperSeatRow(seatConfig)
                                : getNormalSeatRow(seatConfig)
                        }
                    )}
                </div>
            </div>
            <SecondaryButton onClick={bookSelectedSeats} text="Book Selected Seats"/>
        </div>
    )
}