import React from 'react'
import styled from 'styled-components'
import { Colors } from '../../../GlobalStyles'


const StyledButton = styled.button`
    border-style: none;
    cursor: pointer;
    margin-bottom: 10px;
    background-color: ${Colors.darkBlue};
    font-size: 15px;
    font-weight: 400;
    color: ${Colors.paleBlue}

`

const Button = (props) => {
  return (
    <StyledButton >{props.children}</StyledButton>
  )
}

export default Button