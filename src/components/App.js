import React from 'react'
// import logo from '../logo.svg'
import './App.css'
import DogPicker from './DogPicker'

function App () {
  return (
    <div className='main'>
      <div className='content'>
        <header className='App-header'>
          {/* <img src={logo} className='App-logo' alt='logo' /> */}
          <DogPicker />
        </header>
      </div>
      <footer>
        Efosa Oyegun
      </footer>
    </div>
  )
}

export default App
