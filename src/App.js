import * as React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home/Home'
import Bookings from './pages/Bookings/Bookings'
import Navbar from './components/Navbar/Navbar'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import PassengerDetails from './pages/passengerDetails/PassengerDetails'
import ContactDetails from './pages/contactDetails/ContactDetails'
import SeatLayout from './pages/SeatLayout/SeatLayout'
import VerifyOtp from  './pages/verifyOtp/VerifyOtp'
import Error from  './pages/error/Error'
import VerifyDetails from  './pages/verifyDetails/VerifyDetails'
import BookingDetails from  './pages/bookingDetails/BookingDetails'
import CityLocation from  './pages/cityLocation/CityLocation'
import CancelBooking from './pages/cancelBooking/CancelBooking'
import CancelConfirmation from './pages/cancelConfirmation/CancelConfirmation'
import './App.css'
import NotFound from './pages/notFound/NotFound'
import {useSelector} from 'react-redux'
import Buses from './pages/buses/Buses'

function App () {
    const state = useSelector(state => state)
    return (
        <div className='main-container'>
            <Navbar />
            <div className= {`loader ${state?.loader?.isLoading ? 'visible' : 'hidden'}`}>
                <img alt='Loading...' src={require('./icons/Loading.gif')} />
                <h4>Loading . . .</h4>
            </div>
            <div className='pages-container'>
                <Routes>
                    <Route exact path="/signup" element={<SignUp/>} />
                    <Route exact path="/signin" element={<SignIn/>} />
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/buses" element={<Buses/>} />
                    <Route exact path="/bookings" element={<Bookings/>} />
                    <Route exact path="/seat-layout" element={<SeatLayout/>} />
                    <Route exact path="/passenger-details" element={<PassengerDetails/>} />
                    <Route exact path="/contact-details" element={<ContactDetails/>} />
                    <Route exact path="/verify-otp" element={<VerifyOtp/>} />
                    <Route exact path="/verify-details" element={<VerifyDetails/>} />
                    <Route exact path="/booking-details" element={<BookingDetails/>} />
                    <Route exact path="/city-location" element={<CityLocation/>} />
                    <Route exact path="/error" element={<Error/>} />
                    <Route exact path="/not-found" element={<NotFound/>} />
                    <Route exact path="/cancel-booking" element={<CancelBooking/>} />
                    <Route exact path="/cancel-confirmation" element={<CancelConfirmation/>} />
                    {/* <Route path="/busnotfound" element={<BusNotFound/>} /> */}
                </Routes>
            </div>
        </div>
    )
}

// location page
// verify details
// bookings list 
// booking details
// alert info toast 
// something went wrong
// no buses found 

//Done
// passenger details
// contact details
// otp verification page


export default App