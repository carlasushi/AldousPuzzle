import styled, {createGlobalStyle, css} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@keyframes glow {
  0%{
    box-shadow:rgb(254,213, 186) 0 0 0px;
  }  
  100% {
    box-shadow:rgb(254,213, 186) 0 1.5em 2.5em;
  }
}
body {
  background: #262613;
  color: #FFFEF2;
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}
`
//reusing on header and footer
export const Marginals = css `
  box-sizing: border-box;
  display: flex;
  pointer-events: none; 
  position: fixed; 
  width: 100vw;
  z-index:1;
`
// $isTogether from App.jsx
export const ImageContainer = styled.div.attrs(({$isTogether}) => ({
  style: {
    animation: $isTogether ? 'glow 3s infinite alternate' : 'none',
  },
}))`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  // resized image to fit the grid 
  height: 600px;
  width: 400px;
`

export const Wrapper = styled.section.attrs(({$color}) => ({
  style: {
    backgroundColor: `hsl(${$color}, 20%, 18%)`,
  },
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`