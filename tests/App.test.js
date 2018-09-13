import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'

test('<App /> contains the <Words /> component', () => {
  const expected = '<Connect(Words) />'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toMatch(expected)
})


test('<App /> contains a title', () => {
  const expected = 'News centre'
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toMatch(expected)
})