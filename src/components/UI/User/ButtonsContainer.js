import React from 'react'
import styled from 'styled-components'
import FlexContainer from '../General/FlexContainer'
import CardButton from './CardButton'

const StyledButtonsContainer = styled(FlexContainer)`
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 25px;
    flex-grow: 1;
    /* height: auto; */
`

const ButtonsContainer = (props) => {

  const clickHandler = (item) => {
    // console.log(item);
    props.clickHandler(item)
  }
  
  return (
    <StyledButtonsContainer>
      {props.timeframes.map(item => <CardButton clickHandler={clickHandler} >{item}</CardButton>)}
    </StyledButtonsContainer>
  )
}

export default ButtonsContainer