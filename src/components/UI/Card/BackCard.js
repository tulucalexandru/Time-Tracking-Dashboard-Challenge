import React from "react";
import styled from "styled-components";
// import { Colors } from "../../../GlobalStyles";

const StyledBackCard = styled.div`
  background-color: ${(props) => props.bgColor};
  height: 250px;
  border-radius: 25px;
  position: relative;
  display: flex;
  /* overflow: hidden; */
  min-width: 253px;
  bottom: 0;
`;

const BackCard = (props) => {
  console.log(props.bgColor);
  return (
    <StyledBackCard bgColor={props.bgColor}>
      {props.children}
    </StyledBackCard>
  );
};

export default BackCard;
