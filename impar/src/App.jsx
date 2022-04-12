import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App