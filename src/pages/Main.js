import React from "react";
import { Switch, Route } from "react-router-dom";

import "./Main.css";

import Home from "./Home";
import Contacts from "./Contacts";
import NewContact from "./NewContact";

const Main = props => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/new-contact" component={NewContact} />
    </Switch>
  </main>
);

export default Main;
