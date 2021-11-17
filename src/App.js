import Cities from "./components/Cities";
import Container from "./components/Container";
import Divider from "./components/Divider";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Header>Previsao do Tempo</Header>
        <SearchBar />
        <Divider />
        <Cities />
      </Container>
    </div>
  );
}

export default App;
