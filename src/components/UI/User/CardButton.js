import React from "react";
import styled from "styled-components";
import { Colors } from "../../../GlobalStyles";
import Button from "../General/Button";

// const StyledCardButton = styled(Button)`
//         margin-bottom: 10px;
//     background-color: ${Colors.darkBlue};
//     font-size: 15px;
//     font-weight: 400;
//     color: ${Colors.paleBlue}
// `

const StyledCardButton = styled(Button)`
  background-color: ${Colors.darkBlue};
  font-size: 15px;
  font-weight: 400;
  color: ${Colors.paleBlue};

  &.active {
    color: white;
  }

  & + & {
    margin-top: 10px;
  }
`;

const CardButton = (props) => {
  const clickHandler = (item) => {
    // console.log(item);
    props.clickHandler(item);
    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    };
  };

  return (
    <StyledCardButton clickHandler={clickHandler}>
      {props.children}
    </StyledCardButton>
  );
};

export default CardButton;
