import React from "react";
import styled from "styled-components";
import Card from "./Card";
import FlexContainer from "../General/FlexContainer";


const StyledSmallCardsContainer = styled(FlexContainer)`
  flex-wrap: wrap;
  gap: 30px;
  width: calc(calc(253px * 3) + 30px * 2);

  /* background-color: red; */
`;

const SmallCardsContainer = (props) => {

  // const bgColors = Colors.bgColors;

  return (
    <StyledSmallCardsContainer>
      {props.data.map(item => <Card item={item} bgColor={item.bgcolor}/> )}
    </StyledSmallCardsContainer>
  );
};

export default SmallCardsContainer;
