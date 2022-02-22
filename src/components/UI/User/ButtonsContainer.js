import React from "react";
import styled from "styled-components";
import FlexContainer from "../General/FlexContainer";
import CardButton from "./CardButton";

const StyledButtonsContainer = styled(FlexContainer)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px;
  flex-grow: 1;
  /* height: auto; */

  @media (max-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const ButtonsContainer = (props) => {

  const clickHandler = (item) => {
    props.clickHandler(item);
  };

  return (
    <StyledButtonsContainer>
      {props.timeframes.map((item, index) => (
        <CardButton key={index} clickHandler={clickHandler}>
          {item}
        </CardButton>
      ))}
    </StyledButtonsContainer>
  );
};

export default ButtonsContainer;
