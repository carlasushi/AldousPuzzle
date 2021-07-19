import styled, {createGlobalStyle, css} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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
export const Marginals = css `
  box-sizing: border-box;
  display: flex;
  pointer-events: none; 
  position: fixed; 
  width: 100vw;
  z-index:1;
`