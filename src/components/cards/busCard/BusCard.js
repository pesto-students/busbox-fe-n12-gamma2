import React from "react"
import "./BusCard.css"

export default function BusCard(){
    const aminities = [
        { icon : require("../../../icons/ac.png")
        , text : "A/C"
        },
        { icon : require("../../../icons/wifi.png")
        , text : "WiFi"
        },
        { icon : require("../../../icons/charger.png")
        , text : "Charging"
        },
        { icon : require("../../../icons/rest-stop.png")
        , text : "1 Rest Stop"
        },
    ]

    const timingDetails = [
        {
            text : "Departure Time",
            value : "08:30 PM"
        },
        {
            text : "Journey Time",
            value : "07:45 Hrs"
        }
    ]

    const getAminity = (aminity, index) => {
        return (
            <div key={index} className="aminity">
                <img className="aminity-img" src={aminity.icon} />
                <p className="aminity-text">{aminity.text}</p>
            </div>
        )
    }

    const getTimeDetails = (timeDetails, index) => {
        return (
            <div key={index} className="timing">
                <div className="timing-title">
                    <img className="clock-icon" src={require("../../../icons/clock.png")} />
                    <p>{timeDetails.text}</p>
                </div>
                <p>{timeDetails.value}</p>                      
            </div>
        )
    }

    return(
            <div className="card-bus"> 
{/* Bus Name & Rating */}
                <div className="card-bus-row1">
                    <p className="bus-name">A/C Sleeper(2+1)</p>
                    <div className="rating">
                        <div className="rating-text rating-avg">4.5</div>
                        <div className="rating-text rating-voters">165</div>
                    </div>
                </div>
{/* Journey time & Price */}
                <div className="card-bus-row2">
                    <div className="timings-container">
                        {timingDetails.map(getTimeDetails)}
                    </div>
                    <p className="price">₹ 599</p>
                </div>

{/* Amenities */}

                <div className="card-bus-row3">
                    {aminities.map(getAminity)}
                </div>
            </div>
    )
}