import React from 'react'
import { render } from '@testing-library/react'
import DogGallery from './index'

test('renders learn react link', () => {
  const testBreeds = {
    affenpinscher: {},
    akita: {}
  }
  const { getByText } = render(<DogGallery breeds={testBreeds} />)
  const linkElement = getByText(/affenpinscher/i)
  expect(linkElement).toBeInTheDocument()
  const linkElement2 = getByText(/akita/i)
  expect(linkElement2).toBeInTheDocument()
})
