import React from "react";
import styled from "styled-components";
import FlexContainer from "../General/FlexContainer";
import { Colors } from "../../../GlobalStyles";

const StyledCardDetails = styled(FlexContainer)`
  flex-direction: column;
  justify-content: start;

  h1 {
      font-size: 45px;
      margin-top: 30px;
      margin-bottom: 20px;
      font-weight: 300;
  }

  p {
      font-size: 13px;
      color: ${ props => props.paragraphColor };
  }

  @media (max-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & > h1,p {
      margin: 10px 0 0 0;
    }

    & h1 {
      font-size: 40px;
    }
  }
`;

const CardDetails = (props) => {

  return (
    <StyledCardDetails paragraphColor={Colors.paleBlue}>
      <h1>{props.details.current}hrs</h1>
      <p>Last week - {props.details.previous}hrs</p>
    </StyledCardDetails>
  );
};

export default CardDetails;
