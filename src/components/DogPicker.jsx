import { lowerCase, startsWith, trim } from 'lodash'
import React, { createRef, useState, useEffect } from 'react'

import DogGallery from './DogGallery'
import { fetchDogBreeds } from '../lib/data'
import { useLocalStorage } from '../lib/hooks'

import './DogPicker.css'

function DogList () {
  const [breeds, setBreeds] = useLocalStorage('breeds')
  const [breedsToShow, setBreedsToShow] = useState({})
  const [filters, setFilters] = useState('')

  const filterRef = createRef()

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
      for (const k in breeds) {
        const filtersArr = filters.split(',')
        for (const filter of filtersArr) {
          const cleanFilter = lowerCase(trim(filter))
          if (!cleanFilter) {
            break
          } else if (startsWith(k, cleanFilter)) {
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
      <h2>Dog Finder</h2>
      <input
        onChange={onFilterChange}
        placeholder='Filter e.g. akita, african, appen'
        ref={filterRef}
      />
      <DogGallery breeds={breedsToShow} />
    </>
  )
}

export default DogList
