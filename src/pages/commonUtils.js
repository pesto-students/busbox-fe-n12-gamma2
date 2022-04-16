export const isValidEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}; 

export const capitalize = (str) => {
    if(!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export const getPassengerString = (passenger) => {
    return `${passenger.name} ${passenger.gender.charAt(0)} ${passenger.age}`
}

export const validateSignupData = (state) => {
    const name = state.name.trim();
    const email = state.email.trim().toLowerCase();
    const password = state.password.trim();
    const confirmPassword = state.confirmPassword.trim();

    if(!name){
        return 'Please enter your full name'
    }
    if(!isValidEmail(email)){
        return 'Please enter a valid email address'
    }
    if(!password){
        return 'Please enter a password'
    }
    if(password.length < 6){
        return 'Password must be at least 6 characters long'
    }
    if(password.length > 25){
        return 'Password can not be more than 25 characters long'
    }
    if(!confirmPassword){
        return 'Please confirm your password'
    }
    if(password !== confirmPassword){
        return 'Passwords do not match'
    }
    return false;
}