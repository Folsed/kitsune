import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useDebounce = (value, delay) => {
    const [debValue, setDebValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebValue(value)
        }, delay);

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])
    
    return debValue
}

export default useDebounce