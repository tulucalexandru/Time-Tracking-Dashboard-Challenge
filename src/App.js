import "./App.css";
import Wrapper from "./components/UI/Wrapper/Wrapper";
import Card from "./components/UI/Card/Card";
import GlobalStyles from "./GlobalStyles";
// import { Colors } from "./GlobalStyles";
const data = require('./components/assets/data.json');

function App() {
  return (
    <main className="App">
      <GlobalStyles />
      <Wrapper>
        <Card data={data[0]} />
      </Wrapper>
    </main>
  );
}

export default App;
