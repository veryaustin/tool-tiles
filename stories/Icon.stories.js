import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select, color } from '@storybook/addon-knobs'
import getIconNames from '../utils/getIconNames'
import { Icon } from '../src/'
import { paths } from '../src/components/Icons'

const stories = storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['Icon'] })
  .add('default', () => (
    <Icon
      icon={select('Icon Name', getIconNames(paths), 'pdf')}
      color={color('Color')}
    />
  ))
