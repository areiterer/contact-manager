import React, { Component } from "react";
import "./App.css";

import SearchableContactList from "./container/SearchableContactList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchableContactList />
      </div>
    );
  }
}

export default App;
