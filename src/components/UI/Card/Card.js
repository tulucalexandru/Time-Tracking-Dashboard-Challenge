import React from 'react'
// import FlexContainer from '../General/FlexContainer';
import styled from 'styled-components';
import { Colors } from '../../../GlobalStyles';
import CardTitleContainer from './CardTitleContainer';

const StyledCard = styled.div`
    /* width: 100px;
    height: 100px; */
    border-radius: 25px;
    padding: 30px;
    background-color: ${props => props.bgColor};
`

const Card = ({data}) => {
  return (
    <StyledCard bgColor={Colors.darkBlue}>
      <CardTitleContainer title={data.title}/>
    </StyledCard>
  )
}

export default Card;