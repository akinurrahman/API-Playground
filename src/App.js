import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/navbar/Navbar";
import Jokes from "./components/show more/Jokes";
import Facts from "./components/Facts/Facts";
import Quotes from "./components/Quotes/Quotes";
import ConvertCurrency from "./components/currency-convert/ConvertCurrency";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/currency-converter" element={<ConvertCurrency />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
