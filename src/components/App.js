import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../shared/NavBar";
import Home from "../pages/Home";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
