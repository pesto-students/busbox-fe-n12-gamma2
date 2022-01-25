import React, {useState} from 'react'
import moment from 'moment'
import {useNavigate} from 'react-router-dom'
// MUI Imports
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { TextField } from '@mui/material';
import { DatePicker } from "@mui/lab" 
// Component Imports
import PrimaryButton from '../../components/buttons/primaryButton/PrimaryButton';
import InputBox from '../../components/inputBox/InputBox';
import DayChip from '../../components/chips/dayChip/DayChip';
import Heading from '../../components/heading/Heading';
// Utility Import
import api from '../../axios/api'
import "./Home.css" 
// Redux Related
// import {useDispatch} from 'react-redux'
// import {bindActionCreators} from 'redux'
// import { routeActions } from "../../state/index"

export default function Home(){
    const navigate = useNavigate();
    // const {setCurrentRoute} = bindActionCreators(routeActions, useDispatch());

    const [searchInput, setSearchInput] = useState({
        sourceCity : "",
        destinationCity: "",
        date : moment(new Date()).format("DD/MM/YYYY")
    });

    const [chip, setChip] = useState('today');

    const handleChange = (event) => {
        const name= event?.target?.name;
        if(!name){
            setSearchInput(prevInput => ({
                ...prevInput,
                date: moment(event).format("DD/MM/YYYY")
            }))
            setChip('other');
            return;
        }
        setSearchInput(
            prevInput => ({
                ...prevInput,
                [name] : event.target.value
            })
        )
    }

    const selectDay = (name) => {
        name === 'today'
        ? setSearchInput(prev => ({...prev, date: moment(new Date()).format("DD/MM/YYYY")}))
        : name === 'tomorrow' 
        ? setSearchInput(prev => ({...prev, date: moment(new Date()).add(1, 'day').format("DD/MM/YYYY")}))
        : undefined

        setChip(name)
    }

    function searchBuses(){
        api.get('/buses/list', {params : searchInput}).then(result => {
            // setCurrentRoute(searchInput)
            navigate('/buses', {
                state : {
                    buses : [...result.data],
                    route: {...searchInput}
                }})
        }).catch(err => {
            console.error('ERR_', err);
        })
    }

    return(
        <div className="home-page">
            <Heading text="Choose Source & Destination"/>
            <div className='city-input'>
                <InputBox
                    onChange={handleChange}
                    name='sourceCity' 
                    inputType="text" 
                    placeholder="Source City" 
                    icon={require("../../icons/city.png")}
                />
                <img className='swap-icon' src={require("../../icons/city-swap.png")}/>
                <InputBox
                    onChange={handleChange}
                    name='destinationCity' 
                    inputType="text" 
                    placeholder="Destination City" 
                    icon={require("../../icons/city.png")}
                />
            </div>
            <div className='date-input'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Choose journey date"
                        className='date-picker'
                        value={moment(searchInput.date, "DD/MM/YYYY").toDate()}
                        renderInput={(params) => <TextField {...params} />}
                        onChange={handleChange} // TODO :: change openPicker icon later.
                        inputFormat="dd/MM/yyyy"
                    />
                </LocalizationProvider>
                <div className="pick-a-day">
                    <DayChip onClick={selectDay} name='today' className={chip === 'today' ? 'selected' : 'deselected'} dayName="Today"/>
                    <DayChip onClick={selectDay} name='tomorrow' className={chip === 'tomorrow' ? 'selected' : 'deselected'} dayName="Tomorrow"/>
                </div>
            </div>
            <PrimaryButton
                onClick={searchBuses}
                text="Search Buses" 
                icon={require("../../icons/btn-arrow.png")}
            />
        </div>
    )
}