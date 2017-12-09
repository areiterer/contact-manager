import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import ContactList from "./components/ContactList";

const dummyContacts = [
  {
    name: "Max Mustermann"
  },
  {
    name: "Jane Doe"
  },
  {
    name: "John Juarez"
  },
  {
    name: "Barry Moon"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={dummyContacts} />
      </div>
    );
  }
}

export default App;
