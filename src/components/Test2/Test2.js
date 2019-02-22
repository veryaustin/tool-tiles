import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledDiv = styled.div`
  background-color: blue;
`

const Test2 = ({ children }) => {
  return (
    <StyledDiv>
      <h1>{children}</h1>
    </StyledDiv>
  )
}

export default Test2

Test2.propTypes = {
  children: PropTypes.string.isRequired,
}
