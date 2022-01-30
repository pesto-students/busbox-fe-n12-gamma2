import React, { useState } from "react"
import Heading from '../../components/heading/Heading';
import BusCard from "../../components/cards/busCard/BusCard";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import "./SeatLayout.css"
import BusSeat from "../../components/seat/BusSeat";
import { useNavigate } from "react-router-dom";
import {getNormalSeatRow, getSleeperSeatRow, getSeatInfo} from './seatLayoutUtils'
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import {dataActions, snackbarActions} from '../../state/index'
import snackbar from '../../components/snackbar/snackbarUtils'

export default function SeatLayout(){
    const sleeperRows = [0,1,2,3,4,5,6] 
    const normalRows = [0,1,2,3,4,5,6,7,8,9,10];
    const data = useSelector(state => state?.data);
    const selectedBus = data.selectedBus;
    const seatStatuses = selectedBus.seatStatuses
    const isSleeper = selectedBus.isSleeper;
    const rows = isSleeper ? sleeperRows : normalRows;
    const navigate = useNavigate();
    const [selectedSeats, setSelectedSeats] = useState(data.selectedSeats||[]);
    const {setSelectedSeats : setInReduxSelectedSeats} = bindActionCreators(dataActions, useDispatch())

    console.log('selectedSeats', selectedSeats);

    const selectSeat = (seatNumber) => {
        setSelectedSeats(prev => {
            const filtered = prev.filter(prevSeat => prevSeat.seatNumber !== seatNumber)
            const thisSeat = seatStatuses.filter(seat => seat.seatNumber === seatNumber)[0];
            return [...filtered, thisSeat]
        })
    }

    const deselectSeat = (seatNumber) => {
        setSelectedSeats(prev => {
            const filtered = prev.filter(prevSeat => prevSeat.seatNumber !== seatNumber)
            return filtered;
        })
    }

    const bookSelectedSeats = () => {
        if(selectedSeats.length <= 0){
            return snackbar.error('No seats selected.');
        }
        setInReduxSelectedSeats(selectedSeats)
        navigate('/buses/seats/locations')
    }


    return(
        <div className="seat-layout">
            <div className="page-content">
                <Heading text="Select Seats"/>
                <BusCard 
                    bus={data.selectedBus}
                    sourceCityName={data.sourceCity.cityName}
                    destinationCityName={data.destinationCity.cityName}
                    onClick={() => console.log('bus card clicked!')}
                />
                <div className="seats">
                    {getSeatInfo(isSleeper)}
                    {   isSleeper &&
                        <div className="deck-info">
                            <h4> Lower Deck </h4>
                            <h4> Upper Deck </h4>
                        </div>
                    }
                    <div className={isSleeper ? "" : "normal-seats-container"}> 
                        {rows.map(
                            (row, index, array) => {
                                const seatConfig = {
                                    row,
                                    isLastRow: index === array.length - 1,
                                    seatStatuses: seatStatuses,
                                    selectedSeats : selectedSeats,
                                    selectSeat,
                                    deselectSeat,
                                }
                                return isSleeper ? getSleeperSeatRow(seatConfig)
                                    : getNormalSeatRow(seatConfig) 
                            }
                        )}
                    </div>
                </div>
            </div>
            <SecondaryButton onClick={bookSelectedSeats} text="Book Selected Seats"/>
        </div>
    )
}