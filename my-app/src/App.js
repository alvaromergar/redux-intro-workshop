// import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
        {/* <Route path="/dashboard">
          <Dashboard/>
        </Route> */}
    </BrowserRouter>
  );
}

export default App;
