import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavbarComponent from "./components/NavbarComponent";
import MainComponent from "./components/MainComponent";
import SearchBarComponent from "./components/SearchBarComponent";
import { useState } from "react";
import DetailComponent from "./components/DetailComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";

function App() {
  const [city, setCity] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handleSearchSubmit = (city, countryCode) => {
    setCity(city);
    setCountryCode(countryCode);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <NavbarComponent />
        </header>

        <main className="App-header">
          <p className="fs-4 fw-semibold mb-5">Weather forecasts from all over the world</p>
          <Routes>
            <Route
              element={
                <>
                  <SearchBarComponent onSubmit={handleSearchSubmit} />
                  <MainComponent city={city} countryCode={countryCode} />
                </>
              }
              path="/"
            />
          </Routes>
          <Routes>
            <Route element={<DetailComponent city={city} countryCode={countryCode} />} path="/detail" />
          </Routes>
        </main>

        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
