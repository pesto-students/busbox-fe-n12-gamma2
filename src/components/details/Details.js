import React from "react";
import './Details.css'

export default function (props){
    const getDetail = (detail) => {
        return (
            <div className='detail'>
                <p className='left'>{detail.key}</p>
                <p>{detail.value}</p>
            </div>
        )
    }
    return (
        <div className='details-card'>
            {props.data.map(getDetail)}
        </div>
    )
}