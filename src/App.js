import React, { Suspense } from "react";

import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Head from "./component/head";
import Complete from "./component/complete";

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={"/"}>
            <Complete />
          </Route>
          <Route path={"/body"} component={Head} />
        </Switch>
      </Router>
    </>
  );
}
