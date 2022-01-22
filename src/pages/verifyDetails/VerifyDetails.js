import React from 'react'
import './VerifyDetails.css'
import Heading from '../../components/heading/Heading'
import SecondaryButton from '../../components/buttons/secondaryButton/SecondaryButton'
import dummyData from '../../dummyData'
import Details from '../../components/details/Details'

export default function VerifyDetails(){


    return (
        <div className='verify-details'>
            <div className='page-content'>
                <Heading text='Verify All Details'/>
                <Details data={dummyData} />
            </div>
            <SecondaryButton text='Continue To Payment'/>
        </div>
    )
}