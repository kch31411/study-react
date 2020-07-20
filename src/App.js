import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CH from "./ch";
import InputSample from "./ch/input";
import EY from "./ey";
import GW from "./gw";
import HS from "./hs";
import SY from "./sy";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/ch">CH</Link>
            </li>
            <li>
              <Link to="/ey">EY</Link>
            </li>
            <li>
              <Link to="/gw">GW</Link>
            </li>
            <li>
              <Link to="/hs">HS</Link>
            </li>
            <li>
              <Link to="/sy">SY</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/ch">
            <InputSample />
            <CH value={1} color="red" />
            <CH value={2} showBtn={false} />
            <CH value="3" />
          </Route>
          <Route path="/ey">
            <EY />
          </Route>
          <Route path="/gw">
            <GW />
          </Route>
          <Route path="/hs">
            <HS />
          </Route>
          <Route path="/sy">
            <SY />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
