import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grid } from '../src/'
import { withKnobs } from '@storybook/addon-knobs'

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
