import React, { useState } from "react";
import styled from "styled-components";
import FlexContainer from "./FlexContainer";
import SmallCardsContainer from "../Card/SmallCardsContainer";
import UserBackCard from "../User/UserBackCard";

// Importing data from JSON file
import data from "../../assets/data";

const SytledMainContentWrapper = styled(FlexContainer)`
  gap: 30px;

  @media (max-width: 1100px) {
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: start;
  }
`;

const MainContentWrapper = () => {
  const [choice, setChoice] = useState("weekly");

  //Create array of timeframes for mapping the buttons
  let timeframes = Object.keys(data[0].timeframes);
  timeframes = timeframes.map(
    (item) => item[0].toUpperCase() + item.substring(1, item.length)
  );

  //Set choice for timeframe
  const clickHandler = (item) => {
    setChoice(item.toLowerCase());
  };

  //Filter date based on selected timframe
  let filteredData = [];

  for (let item of data) {
    let filteredItem = {};
    for (let key in item) {
      if (key === "timeframes") {
        filteredItem["timeframes"] = item.timeframes[choice];
      } else {
        filteredItem[key] = item[key];
      }
    }

   filteredData.push(filteredItem);
  }

  console.log(filteredData);


  return (
    <SytledMainContentWrapper>
      <UserBackCard clickHandler={clickHandler} timeframes={timeframes} />
      <SmallCardsContainer data={filteredData} />
    </SytledMainContentWrapper>
  );
};

export default MainContentWrapper;
