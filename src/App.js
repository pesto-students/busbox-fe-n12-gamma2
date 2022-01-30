import * as React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
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
import CancelConfirmation from './pages/cancelConfirmation/CancelConfirmation'
import './App.css'
import NotFound from './pages/notFound/NotFound'
import {useSelector} from 'react-redux'
import Buses from './pages/buses/Buses'
import Breadcrumbs from './Breadcrumbs'
import Snackbar from './components/snackbar/Snackbar'
import HandleSuccess from './pages/handleSuccess/HandleSuccess'


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
                    <Route exact path='booking-failed' element={<Navigate to='/buses/seats/locations/passengers/contact/verify'/>}/>

                    <Route exact path="/bookings" element={<Bookings/>} />
                    <Route exact path="/bookings/details" element={<BookingDetails/>} />
                    <Route exact path="/bookings/details/:bookingId" element={<HandleSuccess/>} />
                    <Route exact path="/bookings/details/cancel" element={<VerifyOtp/>} />
                    <Route exact path="/cancel-confirmation" element={<CancelConfirmation/>} />

                    <Route exact path="/error" element={<Error/>} />
                    <Route exact path="/not-found" element={<NotFound/>} />
                </Routes>
            </div>
            <Snackbar/>
        </div>
       
    )
}

export default App