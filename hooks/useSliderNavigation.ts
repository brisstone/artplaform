import React from 'react';

export default function useSliderNavigation (length: number) {
    const [ currentIndex, setCurrentIndex ] = React.useState(0)
    
    const previous = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        } else setCurrentIndex(length - 1)
    }
    
    const next = () => {
        if (currentIndex < length - 1) {
            setCurrentIndex(currentIndex + 1)
        } else setCurrentIndex(0)
    }

    return {
        currentIndex,
        setCurrentIndex,
        previous,
        next
    }
}