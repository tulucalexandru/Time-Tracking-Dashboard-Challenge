import React from 'react'
import styled from 'styled-components';
import FlexContainer from '../General/FlexContainer';
import { Colors } from '../../../GlobalStyles';

const StyledWrapper = styled(FlexContainer)`
    height: 100vh;
    background-color: ${Colors.veryDarkBlue};
    align-items: center;
    justify-content: center;
`

const Wrapper = (props) => {
  return (
    <StyledWrapper>{props.children}</StyledWrapper>
  )
}

export default Wrapper;