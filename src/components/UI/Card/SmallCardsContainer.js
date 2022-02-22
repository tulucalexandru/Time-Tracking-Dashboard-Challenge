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

  return (
    <StyledSmallCardsContainer>
      {props.data.map((item, index) => <Card img={require('../../assets/images/icon-work.svg').default} key={index} item={item} bgColor={item.bgcolor}/> )}
    </StyledSmallCardsContainer>
  );
};

export default SmallCardsContainer;
