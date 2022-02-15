import React from 'react'
import styled from 'styled-components';
import FlexContainer from '../General/FlexContainer';
import { Colors } from '../../../GlobalStyles';

const StyledWrapper = styled(FlexContainer)`
    height: 100vh;
    background-color: ${Colors.veryDarkBlue};
`

const Wrapper = () => {
  return (
    <StyledWrapper />
  )
}

export default Wrapper