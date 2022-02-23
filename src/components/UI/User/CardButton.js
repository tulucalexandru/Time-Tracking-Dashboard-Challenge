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
  
  &:hover {
    color: white;
  }

  @media (max-width: 1100px) {
    margin: 0; 
    & + & {
    margin-top: 0px;
  }
  }
`;

const CardButton = (props) => {
  const clickHandler = (item, event) => {
    console.log(event);
    props.clickHandler(item);
    let buttons = document.getElementsByClassName(event.target.classList.value);
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    };
    event.target.classList.add('active');
  };

  return (
    <StyledCardButton className={props.children.toLowerCase() ==='weekly' ? 'active' : ''} clickHandler={clickHandler}>
      {props.children}
    </StyledCardButton>
  );
};

export default CardButton;
