import { createGlobalStyle } from "styled-components";

//Setting default style for the whole page
const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
        color: white;
    }

    h1 {
        font-size: 18px;
    }
`;
export default GlobalStyles;

// Setting color variables for environment
export const Colors = {
  /* Primary colors */
  blue: "hsl(246, 80%, 60%)",
  bgWork: "hsl(15, 100%, 70%)",
  bgPlay: "hsl(195, 74%, 62%)",
  bgStudy: "hsl(348, 100%, 68%)",
  bgExercise: "hsl(145, 58%, 55%)",
  bgSocial: "hsl(264, 64%, 52%)",
  bgSelfCare: "hsl(43, 84%, 65%)",

  /* Neutral */
  veryDarkBlue: "hsl(226, 43%, 10%)",
  darkBlue: "hsl(235, 46%, 20%)",
  desaturatedBlue: "hsl(235, 45%, 61%)",
  paleBlue: "hsl(236, 100%, 87%)",
};
