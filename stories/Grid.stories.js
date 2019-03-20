import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grid } from '../src/'
import { withKnobs } from '@storybook/addon-knobs'
import projectTools from '../__fixtures__/projectTools'

const stories = storiesOf('Grid', module)

stories.addDecorator(withKnobs).addParameters({ jest: ['Grid'] })

stories.add('default', () => <Grid tools={projectTools} />)
