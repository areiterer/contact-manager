import React, { Component } from "react";

import "./Contacts.css";

import ContactList from "../components/ContactList";
import ContactDetail from "../components/ContactDetail";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      selectedContact: null
    };

    this.handleContactSelected = this.handleContactSelected.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8000/contacts")
      .then(result => result.json())
      .then(data => this.setState({ contacts: data }));
  }

  handleContactSelected(contactId) {
    this.setState({ selectedContact: contactId });
  }

  render() {
    const selectedContactId = this.props.match.params.id;
    const selectedContact = this.state.contacts.find(
      c => c.id === selectedContactId
    );
    return (
      <div className="contacts">
        <ContactList contacts={this.state.contacts} />
        {selectedContact && <ContactDetail contact={selectedContact} />}
      </div>
    );
  }
}

export default Contacts;
