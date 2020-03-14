import React, { createRef, useState, useEffect } from 'react'
import { includes, trim } from 'lodash'

import DogGallery from './DogGallery'
import { fetchDogBreeds } from '../lib/data'
import { useLocalStorage } from '../lib/hooks'

function DogList () {
  const [ breeds, setBreeds ] = useLocalStorage('breeds', {})
  const [ breedsToShow, setBreedsToShow ] = useState('breeds', {})
  const [ filters, setFilters ] = useState('')

  const filterRef = createRef();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchDogBreeds()
      setBreeds(data)
    }
    if (!breeds) getData()
  }, [breeds, setBreeds])

  useEffect(() => {
    if (filters) {
      const filteredBreeds = {}
      for (let k in breeds) {
        const filtersArr = filters.split(',')
        for (let filter of filtersArr) {
          if (includes(k, trim(filter))) {
            filteredBreeds[k] = breeds[k]
            break
          }
        }
      }
      setBreedsToShow(filteredBreeds)
    } else {
      setBreedsToShow(breeds)
    }
  }, [breeds, filters])

  const onFilterChange = () => {
    const val = filterRef.current.value
    setFilters(val)
  }

  return (
    <>
      <h2>Dog List</h2>
      <input
        onChange={onFilterChange}
        placeholdef='Filter dogs with commas'
        ref={filterRef}
      />
      <DogGallery breeds={breedsToShow} />
    </>
  )
}

export default DogList
