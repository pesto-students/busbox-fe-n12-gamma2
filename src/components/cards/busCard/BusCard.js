import React from "react"
import "./BusCard.css"
import { aminitiesMap, getTimingDetails, getAminity, getTimeDetails} from "./busCardUtils"
import {useSelector} from 'react-redux'

export default function BusCard(props){
    const state = useSelector(state => state)
    console.log(props.route);
    const thisBus = props.bus 
    const aminities = thisBus.aminities.map(aminity => aminitiesMap[aminity.toLowerCase()])
    const timingDetails = getTimingDetails(
        thisBus,
        {   sourceCityName : props.sourceCityName,
            destinationCityName : props.destinationCityName
        }
    );
    
    return(
            <div onClick={ () => props.onClick(thisBus.busId) } className="card-bus"> 
{/* Bus Name & Rating */}
                <div className="card-bus-row1">
                    <p className="bus-name">{`${thisBus.busType} (${thisBus.seatLayout})`}</p>
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
                    <p className="price">{`₹ ${thisBus.pricePerSeat}`}</p>
                </div>

{/* Amenities */}

                <div className="card-bus-row3">
                    {aminities.map(getAminity)}
                </div>
            </div>
    )
}