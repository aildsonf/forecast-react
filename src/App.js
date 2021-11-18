import Cities from "./components/Cities";
import CapitalForecast from "./components/CapitalForecast";
import Container from "./components/Container";
import Divider from "./components/Divider";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import GlobalStateProvider from "./context/GlobalState";

import "./styles/output.css";

function App() {
  return (
    <GlobalStateProvider>
      <div
        className="bg-gradient-to-b from-blue-600 to-blue-100 min-h-screen relative z-10"
        style={{ fontFamily: ["Roboto", "sans-serif"] }}
      >
        <Container>
          <Header>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="56"
              viewBox="0 0 24 24"
              className="fill-current text-white"
            >
              <path d="M2.396 12h-2.396v-2h2.396v2zm7.604-6.458v-3.542h-2v3.542h2zm-4.793.876l-2.156-2.156-1.414 1.414 2.156 2.156 1.414-1.414zm9.461-2.396l-2.115 2.114 1.414 1.414 2.115-2.114-1.414-1.414zm-11.7 10.907l-2.198 1.919 1.303 1.517 2.198-1.919-1.303-1.517zm21.032 2.793c0 2.362-1.95 4.278-4.354 4.278h-10.292c-2.404 0-4.354-1.916-4.354-4.278 0-.77.211-1.49.574-2.113-.964-.907-1.574-2.18-1.574-3.609 0-2.762 2.238-5 5-5 1.329 0 2.523.528 3.414 1.376.649-.24 1.35-.376 2.086-.376 3.171 0 5.753 2.443 5.921 5.516 2.034.359 3.579 2.105 3.579 4.206zm-18-5.722c0 .86.37 1.628.955 2.172.485-.316 1.029-.551 1.624-.656.088-1.61.843-3.042 1.994-4.046-.46-.288-.991-.47-1.573-.47-1.654 0-3 1.346-3 3zm16 5.722c0-2.076-1.979-2.618-3.489-2.512.218-1.439-.24-5.21-4.011-5.21-3.875 0-4.062 3.854-4.011 5.209-1.385-.084-3.489.395-3.489 2.513 0 1.256 1.056 2.278 2.354 2.278h10.291c1.299 0 2.355-1.022 2.355-2.278z" />
            </svg>
            Previsão do Tempo
          </Header>
          <SearchBar />
          <CapitalForecast />
          <Divider />
          <Cities />
        </Container>
      </div>
    </GlobalStateProvider>
  );
}

export default App;
