import React from 'react'
import { get } from 'lodash'
import './index.css'

function DogGallery ({ breeds }) {
  const breedsList = Object.keys(breeds).map(k => {
    const imgSrc = get(breeds[k], 'images[0]')
    return (
      <li key={k}>
        <section>
          <img alt={k} src={imgSrc} />
        </section>
        <span>{k}</span>
      </li>
    )
  })

  return (
    <>
      <ul>
        {breedsList}
      </ul>
    </>
  )
}

export default DogGallery
