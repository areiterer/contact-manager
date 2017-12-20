import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import NewContact from "./pages/NewContact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/new-contact" component={NewContact} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
