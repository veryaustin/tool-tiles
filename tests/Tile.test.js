import React from 'react'
import { mount } from 'enzyme'
import { Tile, Icon } from '../src/'

describe('Tile component', () => {
  let wrapper

  // Tile passed no props
  describe('without props', () => {
    beforeEach(() => {
      wrapper = mount(<Tile />)
    })

    it('should exist', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render tile with background color from the default (PDF) icon', () => {
      expect(wrapper).toHaveStyleRule('background-color', '#FF0000')
    })

    it('should render "PDF" icon as the default icon', () => {
      expect(wrapper.find(Icon)).toHaveLength(1)
      expect(
        wrapper.containsMatchingElement(<title id="pdf">pdf Icon</title>)
      ).toEqual(true)
    })
  })

  // Tile passed icon and color props
  describe('with icon & color props', () => {
    beforeEach(() => {
      wrapper = mount(<Tile icon={'markdown'} color={'#EAFF00'} />)
    })

    it('should exist', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render a tile with background from "color" props', () => {
      expect(wrapper.props().color).toEqual('#EAFF00')
      expect(wrapper).toHaveStyleRule('background-color', '#EAFF00')
    })

    it('should render the correct icon', () => {
      expect(wrapper.props().icon).toEqual('markdown')
      expect(wrapper.find(Icon)).toHaveLength(1)
      expect(
        wrapper.containsMatchingElement(
          <title id="markdown">markdown Icon</title>
        )
      ).toEqual(true)
    })
  })

  // Tile passed icon prop only
  describe('with icon prop', () => {
    beforeEach(() => {
      wrapper = mount(<Tile icon={'email'} />)
    })

    it('should exist', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render a tile with background from the associated "logoColor" of icon', () => {
      expect(wrapper).toHaveStyleRule('background-color', '#D0021B')
    })

    it('should render the correct icon', () => {
      expect(wrapper.props().icon).toEqual('email')
      expect(wrapper.find(Icon)).toHaveLength(1)
      expect(
        wrapper.containsMatchingElement(<title id="email">email Icon</title>)
      ).toEqual(true)
    })
  })

  // Tile passed color prop only
  describe('with color prop', () => {
    beforeEach(() => {
      wrapper = mount(<Tile color={'#1859A6'} />)
    })

    it('should exist', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('should render tile with background from the "color" props', () => {
      expect(wrapper.props().color)
      expect(wrapper).toHaveStyleRule('background-color', '#1859A6')
    })

    it('should render the "PDF" icon by default', () => {
      expect(wrapper.props().icon).toEqual('pdf')
      expect(wrapper.find(Icon)).toHaveLength(1)
      expect(
        wrapper.containsMatchingElement(<title id="pdf">pdf Icon</title>)
      ).toEqual(true)
    })
  })
})
