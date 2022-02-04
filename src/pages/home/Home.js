import React, {useEffect, useMemo, useState} from 'react'
import moment from 'moment'
import {useNavigate} from 'react-router-dom'
// MUI Imports
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { TextField, Stack, Autocomplete } from '@mui/material';
import { DatePicker } from "@mui/lab"
import CityInput from './CityInput'
// Component Imports
import PrimaryButton from '../../components/buttons/primaryButton/PrimaryButton';
import InputBox from '../../components/inputBox/InputBox';
import DayChip from '../../components/chips/dayChip/DayChip';
import Heading from '../../components/heading/Heading';
// Utility Import
import snackbar from '../../components/snackbar/snackbarUtils'
import useIsDesktop from '../../customHooks/useIsDesktop'
import api from '../../axios/api'
import cities from '../../data/cities'
import "./Home.css" 
// Redux Related
import {useDispatch, useSelector} from 'react-redux'
import {bindActionCreators} from 'redux'
import { dataActions } from "../../state/index"

export default function Home(){
    const navigate = useNavigate();
    const {setUserInputCurrentRoute, setFoundBuses} = bindActionCreators(dataActions, useDispatch());
    const data = useSelector(state => state?.data)
    const isDesktop = useIsDesktop()
    const [searchInput, setSearchInput] = useState({
        sourceCity : '',
        destinationCity: '',
        date : moment(new Date()).format("DD/MM/YYYY")
    });
    const [chip, setChip] = useState('today');

    useEffect(() => {
        setSearchInput({
            sourceCity : data?.userInputSourceCity || '',
            destinationCity: data?.userInputDestinationCity || '',
            date : data?.userInputDate || moment(new Date()).format("DD/MM/YYYY")
        })
        const today = moment(new Date()).format("DD/MM/YYYY")
        const tomorrow = moment(new Date()).add(1, 'day').format("DD/MM/YYYY")

        const chipName = 
            data?.userInputDate === today 
            ? 'today'
            :  data?.userInputDate === tomorrow
            ? 'tomorrow'
            : 'other'
        setChip(chipName)
    }, [])

    const handleChange = (event) => {
        const name= event?.target?.name;
        if(!name){ // handling chip input here
            setSearchInput(prevInput => ({
                ...prevInput,
                date: moment(event).format("DD/MM/YYYY")
            }))
            setChip('other');
            return;
        }
        setSearchInput( // handling inputbox input here
            prevInput => ({
                ...prevInput,
                [name] : event.target.value
            })
        )
    }

    const handleSourceCityChange = (event, value) => {
        setSearchInput(prev => ({
            ...prev,
            sourceCity: value,
        }))
    }

    const handleDestinationCityChange = (event, value) => {
        setSearchInput(prev => ({
            ...prev,
            destinationCity: value,
        }))
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
        const source = searchInput.sourceCity.trim().toLowerCase();
        const destination = searchInput.destinationCity.trim().toLowerCase();

        if(!source){
            return snackbar.error('Please enter source city');
        }

        if(!destination){
            return snackbar.error('Please enter destination city');
        }

        if(source === destination){
            return snackbar.error('Source & Destination cannot be same');
        }

        setUserInputCurrentRoute({...searchInput, sourceCity: source, destinationCity: destination})

        api.get('/buses/list', {params : {...searchInput, sourceCity: source, destinationCity: destination}}).then(result => {
            if(result?.data?.length && result?.data?.length <= 0){
                navigate('/not-found'); return;
            } else if (!result?.data?.length) {
                navigate('/error'); return;
            }
            
            setFoundBuses(result.data)

            navigate('/buses')
        }).catch(err => {
            if(err?.response?.status === 404){
                navigate('/not-found');
            } else {
                navigate('/error');
            }
        })
    }

    const swap = () => {
        setSearchInput(prev => {
            return {
                ...prev,
                sourceCity : prev.destinationCity,
                destinationCity : prev.sourceCity,
            }
        })
    }
    return(
        <div className={`home-page`}>
            <Heading text="Select Source & Destination"/>
            <div className='city-input'>
                <CityInput value={searchInput.sourceCity} onChange={handleSourceCityChange} label="Source City" />
                <img onClick={swap} className='swap-icon' src={require("../../icons/city-swap.png")}/>
                <CityInput value={searchInput.destinationCity} onChange={handleDestinationCityChange} label="Destination City" />
            </div>
            <div className='date-input'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        sx={{ width: 300 }}
                        label="Choose journey date"
                        className='date-picker'
                        value={moment(searchInput.date, "DD/MM/YYYY").toDate()}
                        renderInput={(params) => <TextField {...params} />}
                        onChange={handleChange} // TODO :: change openPicker icon later.
                        inputFormat="dd/MM/yyyy"
                        minDate={moment().toDate()}
                        maxDate={moment().add(2,'months').toDate()}
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