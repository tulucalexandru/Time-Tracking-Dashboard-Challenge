import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    border-style: none;
    cursor: pointer;
`


const Button = (props) => {
  const classes = props.className;

const clickHandler = (event) => {
  // console.log(event.target.outerText);
  props.clickHandler(event.target.outerText)
}

  return (
    <StyledButton onClick={clickHandler} className={classes}>{props.children}</StyledButton>
  )
}

export default Button