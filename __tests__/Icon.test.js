import React from 'react'
import { mount } from 'enzyme'
import { Icon } from '../src/'

describe('Icon component', () => {
  let wrapper

  // Icon passed no props
  describe('without props', () => {
    beforeEach(() => {
      wrapper = mount(<Icon />)
    })

    it('should exist', () => {
      expect(wrapper).toMatchSnapshot()
      expect(wrapper.exists()).toBe(true)
    })

    it('should render the "PDF" icon by default', () => {
      expect(wrapper).toMatchSnapshot()
      expect(wrapper.find('svg')).toHaveLength(1)
      expect(
        wrapper.containsMatchingElement(<title id="pdf">pdf Icon</title>)
      ).toEqual(true)
    })

    it('should render tile with background color from the default (PDF) icon', () => {
      expect(wrapper.find('[fill="#FF0000"]')).toHaveLength(1)
    })
  })

  // Icon passed icon and color props
  describe('with icon & color props', () => {
    beforeEach(() => {
      wrapper = mount(<Icon icon={'markdown'} color={'#EAFF00'} />)
    })

    it('should exist', () => {
      expect(wrapper).toMatchSnapshot()
      expect(wrapper.exists()).toBe(true)
    })

    it('should render the correct icon', () => {
      expect(wrapper.props().icon).toEqual('markdown')
      expect(wrapper.find('svg')).toHaveLength(1)
      expect(
        wrapper.containsMatchingElement(
          <title id="markdown">markdown Icon</title>
        )
      ).toEqual(true)
    })

    it('should render the icon in the color from "color" props', () => {
      expect(wrapper.props().color).toEqual('#EAFF00')
    })
  })

  // Icon passed icon prop only
  describe('with icon prop', () => {
    beforeEach(() => {
      wrapper = mount(<Icon icon={'email'} />)
    })

    it('should exist', () => {
      expect(wrapper).toMatchSnapshot()
      expect(wrapper.exists()).toBe(true)
    })

    it('should render the correct icon', () => {
      expect(wrapper.props().icon).toEqual('email')
      expect(wrapper.find('svg')).toHaveLength(1)
      expect(
        wrapper.containsMatchingElement(<title id="email">email Icon</title>)
      ).toEqual(true)
    })

    it('should render the icon with the correct "logoColor" color', () => {
      expect(wrapper.find('[fill="#D0021B"]')).toHaveLength(1)
    })
  })

  // Icon passed color prop only
  describe('with color prop', () => {
    beforeEach(() => {
      wrapper = mount(<Icon color={'#EAFF00'} />)
    })
    it('should exist', () => {
      expect(wrapper).toMatchSnapshot()
      expect(wrapper.exists()).toBe(true)
    })

    it('renders the PDF icon in the color from "color" props', () => {
      expect(wrapper.props().color).toEqual('#EAFF00')
      expect(wrapper.find('[fill="#EAFF00"]')).toHaveLength(1)
    })

    it('should render the "PDF" icon by default', () => {
      expect(wrapper.find('svg')).toHaveLength(1)
      expect(
        wrapper.containsMatchingElement(<title id="pdf">pdf Icon</title>)
      ).toEqual(true)
    })
  })
})
