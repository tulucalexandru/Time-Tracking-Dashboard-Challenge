import React from 'react'
import FlexContainer from '../General/FlexContainer';
import styled from 'styled-components';

const StyledCard = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${props => props.bgColor};
`

const Card = (props) => {
  return (
    <StyledCard bgColor={props.bgColor}/>
  )
}

export default Card