import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledDiv = styled.div`
  background-color: red;
`

const Test = ({ children }) => {
  return (
    <StyledDiv>
      <h1>{children}</h1>
    </StyledDiv>
  )
}

export default Test

Test.propTypes = {
  children: PropTypes.string.isRequired,
}
