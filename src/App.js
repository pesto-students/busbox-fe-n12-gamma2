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

function App () {
    return (
        <div className='main-container'>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/bookings" element={<Bookings/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/seatlayout" element={<SeatLayout/>} />
                <Route path="/passengerdetails" element={<PassengerDetails/>} />
                <Route path="/contactdetails" element={<ContactDetails/>} />
                <Route path="/verifyotp" element={<VerifyOtp/>} />
                <Route path="/verifydetails" element={<VerifyDetails/>} />
                <Route path="/bookingdetails" element={<BookingDetails/>} />
                <Route path="/citylocation" element={<CityLocation/>} />
                <Route path="/error" element={<Error/>} />
                <Route path="/notfound" element={<NotFound/>} />
                <Route path="/cancelbooking" element={<CancelBooking/>} />
                <Route path="/cancelconfirmation" element={<CancelConfirmation/>} />
                {/* <Route path="/busnotfound" element={<BusNotFound/>} /> */}
            </Routes>
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