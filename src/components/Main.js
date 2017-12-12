import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contacts from "../pages/Contacts";

const Main = props => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contacts" component={Contacts} />
      <Route path="/contacts/:id" component={Contacts} />
    </Switch>
  </main>
);

export default Main;
