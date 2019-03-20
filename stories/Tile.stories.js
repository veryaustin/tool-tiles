import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tile } from '../src/'
import { withKnobs, select, color } from '@storybook/addon-knobs'
import getIconNames from '../utils/getIconNames'
import { paths } from '../src/components/Icons'

const stories = storiesOf('Tile', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['Tile'] })
  .add('default', () => (
    <Tile
      icon={select('Icon Name', getIconNames(paths), 'pdf')}
      color={color('Color')}
    />
  ))
