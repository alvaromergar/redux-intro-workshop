// import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./style.scss";
import Main from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
        <Route path="/dashboard">
          <Main />
        </Route>
    </BrowserRouter>
  );
}

export default App;
