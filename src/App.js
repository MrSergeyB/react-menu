import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";

import HomePage from "./pages/home-page";
import DriftPage from "./pages/drift-page";
import TimeAttackPage from "./pages/time-attack-page";
import ForzaPage from "./pages/forza-page";
import Menu from "./components/menu";

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Route path="/" exact component={HomePage} />
          <Route path="/drift" component={DriftPage} />
          <Route path="/timeattack" component={TimeAttackPage} />
          <Route path="/forza" component={ForzaPage} />
        </div>
      </div>
    </Router>
  );
}
