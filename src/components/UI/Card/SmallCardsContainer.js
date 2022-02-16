import React from "react";
import styled from "styled-components";
import Card from "./Card";
import FlexContainer from "../General/FlexContainer";
import { Colors } from "../../../GlobalStyles";

const data = require("../../../components/assets/data.json");


const StyledSmallCardsContainer = styled(FlexContainer)`
  flex-wrap: wrap;
  gap: 10px;
  width: calc(calc(253px * 3) + 10px * 2);

  /* background-color: red; */
`;

const SmallCardsContainer = () => {

  const bgColors = Colors.bgColors;

  return (
    <StyledSmallCardsContainer>
      <Card data={data[0]} bgColor={bgColors.bgExercise} />
      <Card data={data[1]} />
      <Card data={data[2]} />
      <Card data={data[3]} />
      <Card data={data[4]} />
      <Card data={data[5]} />
    </StyledSmallCardsContainer>
  );
};

export default SmallCardsContainer;
