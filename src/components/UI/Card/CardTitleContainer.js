import React from 'react'
import styled from 'styled-components';
import FlexContainer from '../General/FlexContainer';
import dots from '../../assets/images/icon-ellipsis.svg';

const StyledTitleContainer = styled(FlexContainer)`
    justify-content: space-between;
    align-items: center;
    
    img {
        display: block;
    }

    h1 {
      font-weight: 500;
    }

`

const CardTitleContainer = ({title}) => {
  return (
    <StyledTitleContainer>
        <h1>{ title }</h1>
        <img src={dots} alt="" />
    </StyledTitleContainer>
  )
}

export default CardTitleContainer