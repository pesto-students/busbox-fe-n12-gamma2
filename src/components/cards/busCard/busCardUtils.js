import React from 'react'

const aminitiesMap = {
    'a/c' : 
        { icon : require("../../../icons/ac.png")
        , text : "A/C"
        },
    'wifi':
        { icon : require("../../../icons/wifi.png")
        , text : "WiFi"
        },
    'charging socket':
        { icon : require("../../../icons/charger.png")
        , text : "Charging"
        },
    '1 rest stop':
        { icon : require("../../../icons/rest-stop.png")
        , text : "1 Rest Stop"
        }
}


const getTimeFromMins = (sourceTime, destinationTime) => {
    const totalInMins = destinationTime - sourceTime;
    let hours = Math.floor(totalInMins / 60);
    let mins = Math.floor(totalInMins % 60);
    hours = `${hours}`.length < 2 ? `0${hours}` : hours  
    mins = `${mins}`.length < 2 ? `0${hours}` : mins
    return  `${hours}:${mins} Hrs`
}

const getTimingDetails = (thisBus, {sourceCityName, destinationCityName}) => {
    const sourceCity = thisBus.busRoute.filter(city => city.cityName === sourceCityName)[0];
    const destinationCity = thisBus.busRoute.filter(city => city.cityName === destinationCityName)[0];
    const departureTime = sourceCity.departureTime;
    const journeyTime = getTimeFromMins(sourceCity.journeyTimeInMins, destinationCity.journeyTimeInMins)
    const timingDetails = [
        {
            text : "Departure Time",
            value : departureTime
        },
        {
            text : "Journey Time",
            value : journeyTime
        }
    ]
    return timingDetails;
}

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

export {
    aminitiesMap,
    getTimingDetails,
    getAminity,
    getTimeDetails
}