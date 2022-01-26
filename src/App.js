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
import Breadcrumbs from './Breadcrumbs'
import Snackbar from './components/snackbar/Snackbar'
function App () {
    const state = useSelector(state => state)
    return (
        <div className='main-container'>
            <Navbar />
            <div className= {`loader ${state?.loader?.isLoading ? 'visible' : 'hidden'}`}>
                <img alt='Loading...' src={require('./icons/Loading.gif')} />
                <h4>Loading . . .</h4>
            </div>
            <Breadcrumbs/>
            <div className='pages-container'>
                <Routes>
                    <Route exact path="/" element={<Home/>} />

                    <Route exact path="/signup" element={<SignUp/>} />
                    <Route exact path="/signin" element={<SignIn/>} />

                    <Route exact path="/buses" element={<Buses/>} />
                    <Route exact path="/buses/seats" element={<SeatLayout/>} />
                    <Route exact path="/buses/seats/locations" element={<CityLocation/>} />
                    <Route exact path="/buses/seats/locations/passengers" element={<PassengerDetails/>} />
                    <Route exact path="/buses/seats/locations/passengers/contact" element={<ContactDetails/>} />
                    <Route exact path="/buses/seats/locations/passengers/contact/verify" element={<VerifyDetails/>} />

                    <Route exact path="/bookings" element={<Bookings/>} />
                    <Route exact path="/bookings/details" element={<BookingDetails/>} />
                    <Route exact path="/bookings/details/cancel" element={<CancelBooking/>} />
                    <Route exact path="/bookings/details/cancel/verify" element={<VerifyOtp/>} />
                    <Route exact path="/cancel-confirmation" element={<CancelConfirmation/>} />

                    <Route exact path="/error" element={<Error/>} />
                    <Route exact path="/not-found" element={<NotFound/>} />
                    {/* <Route path="/busnotfound" element={<BusNotFound/>} /> */}
                </Routes>
            </div>
            <Snackbar/>
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

{/* <div style={{paddingLeft: '2rem', paddingTop: '1rem'}} className='history'>
 <span> Home </span> > 
<span> Buses </span> > 
<span> Seats </span> > 
<span> Pickup & Drop </span> > 
<span> Passengers </span> > 
<span> Contact </span> > 
<span> Verity </span> > 
</div> */}



export default App