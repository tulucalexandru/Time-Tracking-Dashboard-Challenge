import React from 'react'
import styled from 'styled-components'
import FlexContainer from '../General/FlexContainer'
import Button from './Button'

const StyledButtonsContainer = styled(FlexContainer)`
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 25px;
    flex-grow: 1;
    /* height: auto; */
`

const ButtonsContainer = () => {
  return (
    <StyledButtonsContainer>
        <Button>Daily</Button>
        <Button>Weekly</Button>
        <Button>Monthly</Button>
    </StyledButtonsContainer>
  )
}

export default ButtonsContainer