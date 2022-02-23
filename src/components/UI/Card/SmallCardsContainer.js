import React from "react";
import styled from "styled-components";
import Card from "./Card";
import FlexContainer from "../General/FlexContainer";
// import img from '../../assets/icon-work.svg';


const StyledSmallCardsContainer = styled(FlexContainer)`
  flex-wrap: wrap;
  gap: 30px;
  width: calc(calc(253px * 3) + 30px * 2);
  @media (max-width: 1100px) {
    flex-direction: column;
    width: 100%;
    flex-wrap: nowrap;
  }
  /* background-color: red; */
`;

const SmallCardsContainer = (props) => {
  // let img = require(props.da[0].bgImage).default;

  return (
    <StyledSmallCardsContainer>
      {props.data.map((item, index) => <Card img={item.bgImage} key={index} item={item} bgColor={item.bgcolor}/> )}
    </StyledSmallCardsContainer>
  );
};

export default SmallCardsContainer;
