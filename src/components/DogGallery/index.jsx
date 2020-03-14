import { capitalize, get } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import './index.css'

function DogGallery ({ breeds }) {
  const breedsList = breeds && Object.keys(breeds).map(k => {
    const imgSrc = get(breeds[k], 'images[0]')
    return (
      <li key={k}>
        <section className='card'>
          <section>
            <img alt={k} src={imgSrc} />
          </section>
          <span>{capitalize(k)}</span>
        </section>
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

DogGallery.propTypes = {
  breeds: PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string)
  })
}

export default DogGallery
