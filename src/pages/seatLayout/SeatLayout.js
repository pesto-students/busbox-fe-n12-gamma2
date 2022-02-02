import React, { useState } from "react"
import Heading from '../../components/heading/Heading';
import BusCard from "../../components/cards/busCard/BusCard";
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import "./SeatLayout.css"
import BusSeat from "../../components/seat/BusSeat";
import { useNavigate } from "react-router-dom";
import {getSeatLayout, getSeatInfo} from './seatLayoutUtils'
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import {dataActions, snackbarActions} from '../../state/index'
import snackbar from '../../components/snackbar/snackbarUtils'
import api from '../../axios/api'

export default function SeatLayout(){
    const data = useSelector(state => state?.data);
    const selectedBus = data.selectedBus;
    console.log('selectedBus', selectedBus)
    const isSleeper = selectedBus.isSleeper;
    const navigate = useNavigate();
    const [selectedSeats, setSelectedSeats] = useState(data.selectedSeats||[]);
    const [bookedSeats, setBookedSeats] = useState([]);
    const {setSelectedSeats : setInReduxSelectedSeats} = bindActionCreators(dataActions, useDispatch())

    const toggleSeatSelection = (index) => {
        console.log(index);
        if(selectedSeats.includes(index)) setSelectedSeats(seats => seats.filter(seat => seat !== index))
        else setSelectedSeats(seats => [...seats, index])
    }

    useState(() => {
        api.get('/buses/status', {params: {
            busId: selectedBus.busId, 
            date: data.userInputDate
        }}).then(response => {
            const bookedSeats = response.data.bookedSeats.map(seat => seat.seatNumber);
            setBookedSeats(bookedSeats);
        })
    },[selectedBus])

    const seatConfig = {
        ...selectedBus.seatLayout,
        bookedSeats: bookedSeats,
        selectedSeats : selectedSeats,
        toggleSeatSelection,
        isSleeper
    }

    const bookSelectedSeats = () => {
        if(selectedSeats.length <= 0) return snackbar.error('No seats selected.');
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
                        {getSeatLayout(seatConfig)}
                    </div>
                </div>
            </div>
            <SecondaryButton onClick={bookSelectedSeats} text="Book Selected Seats"/>
        </div>
    )
}