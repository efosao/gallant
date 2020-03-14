import React from 'react'
import './App.css'
import DogPicker from './DogPicker'

function App () {
  return (
    <div className='main'>
      <div className='content'>
        <header className='App-header'>
          <h2>Dog Finder</h2>
        </header>
        <DogPicker />
      </div>
      <footer>
        Efosa Oyegun
      </footer>
    </div>
  )
}

export default App
