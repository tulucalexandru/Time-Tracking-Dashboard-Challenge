import React from "react";
import styled from "styled-components";
import { Colors } from "../../../GlobalStyles";
import CardTitleContainer from "./CardTitleContainer";
import CardDetails from "./CardDetails";
import BackCard from "./BackCard";

const StyledCard = styled.div`
  border-radius: 25px;
  padding: 30px;
  width: 100%;
  bottom: 0px;
  background-color: ${(props) => props.bgColor};
  position: absolute;
  bottom: 0;
  transform: translateY(1%);
  /* z-index: 10; */

  @media (max-width: 1100px) {
    padding: 20px;
  }
  
`;

const Card = ({ item, bgColor, img }) => {

  return (
    <BackCard img={img} bgColor={bgColor}>
        <StyledCard bgColor={Colors.darkBlue}>
          <CardTitleContainer title={item.title} />
          <CardDetails details={item.timeframes} />
        </StyledCard>
    </BackCard>
  );
};

export default Card;
