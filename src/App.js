// import { useEffect, useState } from "react";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";

function App() {
  return (
    <Router basename="/">
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/notes" element={<Notes />} />
          <Route exact path="/create" element={<CreateNote />} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
