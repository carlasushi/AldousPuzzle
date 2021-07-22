import React, {useState, useEffect} from 'react'
import {Image} from './styles'
// init coordinates 
const ImgBox = ({x, y, percent}) => {
    const [position, setPosition] = useState([0,0])

    useEffect(() => {
        // img width 450px | 100px e/puzzle piece
        setPosition([
            Math.random() * 450 - x * 100 - 50, 
            Math.random() * 600 - y * 100 -50
        ])
    }, [x,y]) // dependency array for re-running
        //percent from app component 
    return ( <Image 
        $initialX={x} 
        $initialY={y} 
        $movedX={position[0] * percent} 
        $movedY={position[1] * percent}
        />
    )
}
    
export default ImgBox