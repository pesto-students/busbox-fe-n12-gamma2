const home = [
    {
        title: 'Home',
        path: '/',
        icon: require('../../icons/home.png')
    }
]


const getSidebarData = (isSignedIn) => {
    const signInSignUp = [
        {
            title: 'Sign In',
            path: '/signin',
            icon: require('../../icons/about.png')
        },
        {
            title: 'Sign Up',
            path: '/signup',
            icon: require('../../icons/about.png')
        }
    ]
    const bookings = [
        {
            title: 'Bookings',
            path: '/bookings',
            icon: require('../../icons/booking.png')
        }
    ]
   return isSignedIn ? [...home, ...bookings] : [...home, ...signInSignUp] 
}

export default getSidebarData;