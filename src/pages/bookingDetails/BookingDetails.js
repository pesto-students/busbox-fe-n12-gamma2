import React from 'react'
import TertiaryButton from '../../components/buttons/tertiaryButton/TertiaryButton'
import Heading from '../../components/heading/Heading'
import './BookingDetails.css'
import Details from '../../components/details/Details'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import getBookingDetails from './bookingDetailUtils'
import html2pdf from 'html2pdf.js'
import api from '../../axios/api'
import {saveAs} from 'file-saver'
import moment from 'moment'
import snackbar from '../../components/snackbar/snackbarUtils'

export default function BookingDetails(){
    const navigate = useNavigate();

    const booking = useSelector(state => state?.data?.selectedBooking);
    if(!booking){
        navigate('/error');
    }
    const details = getBookingDetails(booking);
    const bookingId = booking.bookingId;
    const cancellable = moment(booking.journeyDate, "DD/MM/YYYY") > moment()
    var opt = {
        margin:       1,
        filename:     'ticket.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };

    const download = () => {
        api.get('/bookings/download', { params: details }).then(response => {
            var html = document.createElement('html')
            html.innerHTML = response.data;
            html2pdf(html)
        }).catch(err => {
            console.error(err, {...err});
        })
    }
    const mailme = () => {
        api.get('/bookings/send', {params: {details, bookingId}}).then(response => {
            if(response.status === 204){
                snackbar.success('Email Sent!');
            }
        }).catch(err => {
            console.error(err, {...err});
        })
    }

    const cancel = () => {
        api.post('/bookings/cancel/initiate', {bookingId}).then(res => {
            if(res.status === 204){
                navigate('/bookings/details/cancel')
            }
        }).catch (err => {
            console.log('err in cancel', err, {...err});
        })
    }
    return (
        <div className='booking-details'>
            <div className='page-content'>
                <Heading text='Booking Details'/>
                <Details data={details}/>
                { cancellable && <h3 onClick={cancel} className='cancel'>Cancel this Booking?</h3>}
            </div>
            <div className='button-container'>
                <div>
                    <TertiaryButton onClick={download} text='Download'/>
                </div>
                <div>
                    <TertiaryButton onClick={mailme} text='E-Mail Me'/>
                </div>
            </div>
        </div>
    )
}