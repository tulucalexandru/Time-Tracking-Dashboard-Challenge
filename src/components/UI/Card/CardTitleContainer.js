import React from 'react'
import styled from 'styled-components';
import FlexContainer from '../General/FlexContainer';

const StyledTitleContainer = styled(FlexContainer)`
    justify-content: space-between;
    align-items: center;
    
    & svg {
        display: block;
    }

    svg:hover path {
      fill: white;
    }

    h1 {
      font-weight: 500;
    }

`

const CardTitleContainer = ({ title }) => {
  return (
    <StyledTitleContainer>
      <h1>{title}</h1>
      {/* <img src={dots} alt="" /> */}
      <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd" /></svg>
    </StyledTitleContainer>
  )
}

export default CardTitleContainer