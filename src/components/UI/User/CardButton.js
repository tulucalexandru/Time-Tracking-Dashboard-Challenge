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

  & + & {
    margin-top: 10px;
  }
`;

const CardButton = (props) => {

  const clickHandler = (item) => {
    // console.log(item);
    props.clickHandler(item);
  }

  return <StyledCardButton clickHandler={clickHandler}>{props.children}</StyledCardButton>;
};

export default CardButton;
