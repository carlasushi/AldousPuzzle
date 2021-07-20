import React from 'react'
import {Image} from './styles'
// init coordinates 
const ImgBox = ({x,y}) => {
    return <Image $initialX={x} $initialY={y}/>
}
    
export default ImgBox