import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const GlobalState = createContext({});

export default function GlobalStateProvider({ children }) {
  const [forecast, setForecast] = useState(() => {});
  const [capital, setCapital] = useState({});
  const [loading, setLoading] = useState(false);

  function findCapital(capitalName) {
    capitalName in forecast?.data
      ? setCapital(forecast?.data[capitalName])
      : setCapital({});
  }

  useEffect(() => {
    setLoading(true);

    axios
      .get("https://apiprevmet3.inmet.gov.br/previsao/capitais")
      .then((payload) => setForecast(payload))
      .catch((err) => window.alert(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <GlobalState.Provider
      value={{ forecast, loading, capital, setCapital, findCapital }}
    >
      {children}
    </GlobalState.Provider>
  );
}

export const useGlobalState = () => useContext(GlobalState);
