import React from 'react'

export default function useIsDesktop () {
    const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 550)

    const onWindowResize = () => {
        const width = Math.min(window.innerWidth, window.outerWidth);
        const isDesktop = width >= 550;
        console.log(isDesktop);
        setIsDesktop(isDesktop)
    }

    React.useEffect (() => {
        window.addEventListener('resize', onWindowResize);
        onWindowResize();
        return () => {
            window.removeEventListener('resize', onWindowResize)
        }
    }, [])
    return isDesktop;
}