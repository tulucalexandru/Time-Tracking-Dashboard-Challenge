import React from 'react'
import styled from 'styled-components'

const StyledFlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const FlexContainer = (props) => {
    const classes = props.className;
  return (
    <StyledFlexBox className={classes}>{props.children}</StyledFlexBox>
  )
}

export default FlexContainer;