import React from 'react'
import { storiesOf } from '@storybook/react'
import Test from './Test'

storiesOf('Test', module).add('with text', () => <Test>Test Component</Test>)
// .add('with some emoji', () => (
// <Button>
//   <span role="img" aria-label="so cool">
//     😀 😎 👍 💯
//   </span>
// </Button>
// ))
