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
  
`;

const Card = ({ data, bgColor }) => {

  console.log(data);
  return (
    <BackCard bgColor={bgColor}>
        <StyledCard bgColor={Colors.darkBlue}>
          <CardTitleContainer title={data.title} />
          <CardDetails details={data.timeframes.weekly} />
        </StyledCard>
    </BackCard>
  );
};

export default Card;
