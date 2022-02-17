import "./App.css";
import Wrapper from "./components/UI/Wrapper/Wrapper";
import GlobalStyles from "./GlobalStyles";
import MainContentWrapper from "./components/UI/General/MainContentWrapper";



function App() {
  return (
    <main className="App">
      <GlobalStyles />
      <Wrapper>
        <MainContentWrapper />
      </Wrapper>
    </main>
  );
}

export default App;
