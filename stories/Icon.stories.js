import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, color } from '@storybook/addon-knobs'
import getIconNames from '../utils/getIconNames'
import { Icon } from '../src/'
import { paths } from '../src/components/Icons'

const stories = storiesOf('Icons', module)

stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Icon
    color={color('Color', '#111111')}
    icon={select('Icon Name', getIconNames(paths), 'email')}
  />
))
