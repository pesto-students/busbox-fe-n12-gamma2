import React from "react";
import './Details.css'

export default function (props){
    const getDetail = (detail, index) => {
        return (
            <div key={index} className='detail'>
                <p className='left'>{detail.key}</p>
                <p>{detail.value}</p>
            </div>
        )
    }
    return (
        <div id="booking" className='details-card'>
            {props.data.map(getDetail)}
        </div>
    )
}