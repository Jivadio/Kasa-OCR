import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";

import Home from "./pages/Home";
import Accomodation from "./pages/Accomodation";
import E404 from "./pages/E404";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<E404 />} />
        </Routes>
      </AppLayout>
    </Router>
  );
};

export default App;
