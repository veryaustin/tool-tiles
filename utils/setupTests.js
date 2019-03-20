import { createSerializer } from 'enzyme-to-json'
import 'jest-styled-components'

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))
