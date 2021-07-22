import React, {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ImgBox from './components/ImgBox'
import {GlobalStyle, ImageContainer, Wrapper} from './styles'
// creating a matrix to break up img
const matrix = [
  [0, 0], [1, 0], [2, 0], [3, 0],
  [0, 1], [1, 1], [2, 1], [3, 1],
  [0, 2], [1, 2], [2, 2], [3, 2],
  [0, 3], [1, 3], [2, 3], [3, 3],
  [0, 4], [1, 4], [2, 4], [3, 4],
  [0, 5], [1, 5], [2, 5], [3, 5]
]

// puzzle effect 
const App = () => {
//init
const [distance, setDistance] = useState(1)
// from  https://easings.net/#easeInCubic
const easing = (num) => Math.pow(num,3)

const calculateDistance = ([x,y]) => {
  // determine area center 
  const center = [window.innerWidth/2, window.innerHeight/2]
  // cursor center point in center area
  const maxHypot = Math.hypot(center[0], center[1])
  // current cursor position from center 
  const hypot = Math.hypot(center[0] - x, center[1] -y)
  // distance as % based on current and max values
  const distance = hypot / maxHypot
  //smooth the animation
  const easeDistance = easing(distance)
  setDistance(easeDistance)
}

// events move and touch
const handleMove = ({clientX, clientY}) => {
  calculateDistance([clientX, clientY])
}
//TouchEvent.touches destructuring
const handleTouchMove = ({touches}) => {
  calculateDistance([touches[0].clientX, touches[0].clientY])
}

return (
  <div className="App">
    <GlobalStyle />
    <Header />
    <Footer />
    <Wrapper 
      onMouseMove={handleMove} 
      onTouchMove={handleTouchMove}
      $color={Math.round(200 - distance * 90)}
      >
      <ImageContainer $isTogether={distance < 0.001}>
        {matrix.map(([x,y], index)=> (
        <ImgBox x={x} y={y} key={index} percent={distance}/>
        ))}
      </ImageContainer>
    </Wrapper>
  </div>
)
}

export default App
