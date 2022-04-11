import React from "react"
import "./BusCard.css"
import { aminitiesMap, getTimingDetails, getAminity, getTimeDetails} from "./busCardUtils"
import {useSelector} from 'react-redux'

export default function BusCard(props){
    const state = useSelector(state => state)
    const thisBus = props.bus 
    const aminities = thisBus.aminities.map(aminity => aminitiesMap[aminity.toLowerCase()])
    const timingDetails = getTimingDetails(
        thisBus,
        {   sourceCityName : props.sourceCityName,
            destinationCityName : props.destinationCityName
        }
    );
    const busHeading = `${thisBus.busType} ${thisBus.aminities.includes('A/C') ? 'A/C' : 'Non A/C'} ${thisBus.isSleeper? 'Sleeper' : 'Seater'}`
    return(
            <div onClick={ () => props.onClick(thisBus.busId) } className="card-bus"> 
{/* Bus Name & Rating */}
                <div className="card-bus-row1">
                    <p className="bus-name">{busHeading}</p>
                    <div className="rating">
                        <div className="rating-text rating-avg">{thisBus.ratings?.rating || '1.0'}</div>
                        <div className="rating-text rating-voters">{thisBus.ratings?.totalRatings || '00'}</div>
                    </div>
                </div>
{/* Journey time & Price */}
                <div className="card-bus-row2">
                    <div className="timings-container">
                        {timingDetails.map(getTimeDetails)}
                    </div>
                    <p className="price">{`₹ ${Math.floor(thisBus.pricePerSeat)}`}</p>
                </div>

{/* Amenities */}

                <div className="card-bus-row3">
                    {aminities.map(getAminity)}
                </div>
            </div>
    )
}