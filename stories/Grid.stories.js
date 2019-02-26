import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grid } from '../src/'
import { withKnobs, select } from '@storybook/addon-knobs'
import getIconNames from '../utils/getIconNames'
import { paths } from '../src/components/Icons'

const data = [
  'html',
  'css',
  'chrome',
  'email',
  'bootstrap',
  'github',
  'adobeillustrator',
  'node',
  'react',
  'slack',
  'babel',
]

const stories = storiesOf('Grid', module)

stories.addDecorator(withKnobs)

stories.add('default', () => <Grid tools={data} />)
