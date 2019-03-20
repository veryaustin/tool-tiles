import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tile } from '../src/'
import { withKnobs, select, text } from '@storybook/addon-knobs'
import getIconNames from '../utils/getIconNames'
import { paths } from '../src/components/Icons'

const stories = storiesOf('Tile', module)

stories.addDecorator(withKnobs)

stories.addDecorator(withKnobs).addParameters({ jest: ['Tile'] })
stories.add('default', () => (
  <Tile
    icon={select('Icon Name', getIconNames(paths), 'pdf')}
    color={text('Color', null)}
  />
))
