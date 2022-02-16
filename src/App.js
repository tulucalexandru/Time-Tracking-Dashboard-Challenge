import "./App.css";
import Wrapper from "./components/UI/Wrapper/Wrapper";
import GlobalStyles from "./GlobalStyles";
import SmallCardsContainer from "./components/UI/Card/SmallCardsContainer";


function App() {
  return (
    <main className="App">
      <GlobalStyles />
      <Wrapper>
        <SmallCardsContainer />
      </Wrapper>
    </main>
  );
}

export default App;
