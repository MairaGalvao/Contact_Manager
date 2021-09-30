import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SmartManager } from "./Components/SmartManager";

import { useHistory as history } from "react-router-dom";

function App() {
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route path={"/"} component={SmartManager} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
