import React from "react";
import styled from "styled-components";
// import { Colors } from "../../../GlobalStyles";
// import img from '../../assets/icon-work.svg';

const StyledBackCard = styled.div`
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-position: 94% -5px;
  background-size: 80px;
  /* background-blend-mode: lighten; */
  background-color: ${(props) => props.bgColor};
  height: 244px;
  border-radius: 25px;
  position: relative;
  display: flex;
  /* overflow: hidden; */
  min-width: 253px;
  bottom: 0;

  @media (max-width: 1100px) {
    height: 160px;
  }
`;

const BackCard = (props) => {
  // console.log(props.bgColor);
  return (
    <StyledBackCard img={props.img} bgColor={props.bgColor}>
      {props.children}
    </StyledBackCard>
  );
};

export default BackCard;
