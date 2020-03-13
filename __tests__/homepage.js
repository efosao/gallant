// Link.react.test.js
import React from 'react'
import Homepage from '../pages/index'
import renderer from 'react-test-renderer'

test('Test homepage', () => {
  const component = renderer.create(
    <Homepage />
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  // manually trigger the callback
  // tree.props.onMouseEnter();
  // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // manually trigger the callback
  // tree.props.onMouseLeave();
  // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
})
