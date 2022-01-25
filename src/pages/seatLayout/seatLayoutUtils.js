import React from 'react'
import BusSeat from '../../components/seat/BusSeat';

function getSleeperSeatRow(seatConfig){
    const {   row,
        seatStatuses,
        selectSeat,
        deselectSeat
    } = seatConfig;
    const rowNumber = row*6
    const getDeck = (a, b, c) => {
        return (
            <div className="sleeper-deck">
                <div className="sleeper-twin">
                    <BusSeat 
                        status={seatStatuses[a].status} 
                        seatNumber={seatStatuses[a].seatNumber}
                        isSleeper={true}
                        selectSeat={selectSeat}
                        deselectSeat={deselectSeat}
                    />
                    <BusSeat 
                        status={seatStatuses[b].status} 
                        seatNumber={seatStatuses[b].seatNumber}
                        isSleeper={true}
                        selectSeat={selectSeat}
                        deselectSeat={deselectSeat}
                    />
                </div>
                <BusSeat 
                    status={seatStatuses[c].status} 
                    seatNumber={seatStatuses[c].seatNumber}
                    isSleeper={true}
                    selectSeat={selectSeat}
                    deselectSeat={deselectSeat}
                />
            </div>
        )
    } 

    return(
        <div key={rowNumber} className="sleeper-row">
            {getDeck(rowNumber+1, rowNumber+2, rowNumber+3)}
            {getDeck(rowNumber+4, rowNumber+5, rowNumber+6)}
        </div>
    )
}

function getNormalSeatRow(seatConfig){
    const {   row,
        isLastRow,
        seatStatuses,
        selectSeat,
        deselectSeat
    } = seatConfig;

    const showMiddleSeat = isLastRow;
    const rowNumber = row*4

    const getSide = (a, b) => {
        return (
            <div className="normal-twin">
                <BusSeat 
                    status={seatStatuses[a].status} 
                    seatNumber={seatStatuses[a].seatNumber}
                    isSleeper={false}
                    selectSeat={selectSeat}
                    deselectSeat={deselectSeat}
                />
                <BusSeat 
                    status={seatStatuses[b].status} 
                    seatNumber={seatStatuses[b].seatNumber}
                    isSleeper={false}
                    selectSeat={selectSeat}
                    deselectSeat={deselectSeat}
                />
            </div>
        )
    }
    return(
        <div key={row} className="normal-row">
            {getSide(rowNumber, rowNumber+1)}
            {showMiddleSeat && 
                <BusSeat  
                    status={seatStatuses[rowNumber+4].status}
                    seatNumber={seatStatuses[rowNumber+4].seatNumber}
                    isSleeper={false}
                    selectSeat={selectSeat}
                    deselectSeat={deselectSeat}
                />}
            {getSide(rowNumber+2, rowNumber+3)}
        </div>
    )
}

export {getNormalSeatRow, getSleeperSeatRow}