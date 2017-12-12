import React, { Component } from "react";

import ContactList from "./ContactList";

class SearchableContactList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/contacts")
      .then(result => result.json())
      .then(data => this.setState({ contacts: data }));
  }

  render() {
    return <ContactList contacts={this.state.contacts} />;
  }
}

export default SearchableContactList;
