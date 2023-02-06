import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Update from "./Update.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
