import React from "react";
import styled from "styled-components";
import Card from "./Card";
import FlexContainer from "../General/FlexContainer";

const data = require("../../../components/assets/data.json");


const StyledSmallCardsContainer = styled(FlexContainer)`
  flex-wrap: wrap;
  gap: 30px;
  width: calc(calc(253px * 3) + 30px * 2);

  /* background-color: red; */
`;

const SmallCardsContainer = () => {

  // const bgColors = Colors.bgColors;

  return (
    <StyledSmallCardsContainer>
      {data.map(item => <Card item={item} bgColor={item.bgcolor}/> )}
      {/* <Card data={data[0]} bgColor={bgColors.bgExercise} />
      <Card data={data[1]} />
      <Card data={data[2]} />
      <Card data={data[3]} />
      <Card data={data[4]} />
      <Card data={data[5]} /> */}
    </StyledSmallCardsContainer>
  );
};

export default SmallCardsContainer;
