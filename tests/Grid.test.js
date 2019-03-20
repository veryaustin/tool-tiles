import React from 'react'
import { shallow } from 'enzyme'
import { Grid, Tile } from '../src/'
import projectTools from '../tests/__stubs__/projectTools'

describe('Grid component', () => {
  let wrapper

  describe('without props', () => {
    wrapper = shallow(<Grid />)

    it('should display error message if tools prop not passed data', () => {
      expect(wrapper.text()).toBe('Please provide data via the "tools" prop')
    })
  })

  describe('with tools props', () => {
    beforeEach(() => {
      wrapper = shallow(<Grid tools={projectTools} />)
    })

    it('should exist', () => {
      expect(wrapper).toMatchSnapshot()
      expect(wrapper.exists()).toBe(true)
    })

    it('should render the correct numbers of tiles', () => {
      expect(wrapper.find(Tile).length).toBe(11)
    })
  })
})
