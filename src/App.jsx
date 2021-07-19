import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {GlobalStyle} from './styles'

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Footer />
      
    </div>
  )
}

export default App
