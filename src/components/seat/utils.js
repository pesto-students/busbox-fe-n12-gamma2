const getSeatIcon = (status='booked') => {
    status = status.toLowerCase();
    if(status === 'available'){
        return require('../../icons/st-available.png')
    } else if(status === 'booked') {
        return require('../../icons/st-booked.png')
    } else if(status === 'selected') {
        return require('../../icons/st-selected.png')
    } else if(status === 'reserved for ladies') {
        return require('../../icons/st-reserved.png')
    }
}

const getSleeperSeatIcon = (status='booked') => {
    status = status.toLowerCase();
    if(status === 'available'){
        return require('../../icons/sl-available.png')
    } else if(status === 'booked') {
        return require('../../icons/sl-booked.png')
    } else if(status === 'selected') {
        return require('../../icons/sl-selected.png')
    } else if(status === 'reserved for ladies') {
        return require('../../icons/sl-reserved.png')
    }
}

module.exports = {
    getSeatIcon,
    getSleeperSeatIcon
}