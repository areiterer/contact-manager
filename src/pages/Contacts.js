import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./Contacts.css";

import ContactList from "../components/ContactList";
import ContactDetail from "../components/ContactDetail";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
    this.handleContactSaved = this.handleContactSaved.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/contacts")
      .then(response => this.setState({ contacts: response.data }));
  }

  handleContactSaved(contact) {
    // TODO: PUT if contact.id exists - otherwise POST
    if (contact.id) {
      return axios
        .put(`http://localhost:8000/contacts/${contact.id}`, contact)
        .then(response => {
          const otherContacts = this.state.contacts.filter(
            c => c.id !== contact.id
          );
          this.setState({ contacts: [...otherContacts, response.data] });
        });
    } else {
      return axios
        .post(`http://localhost:8000/contacts`, contact)
        .then(response => {
          const otherContacts = this.state.contacts.filter(c => c !== contact);
          this.setState({ contacts: [...otherContacts, response.data] });
        });
    }
  }

  render() {
    const match = this.props.match;

    return (
      <div className="contacts">
        <ContactList contacts={this.state.contacts} />

        <Route
          path={`${match.url}/:id`}
          render={props => (
            <ContactDetail
              data={this.state.contacts}
              onSaveContact={this.handleContactSaved}
              {...props}
            />
          )}
        />
        <Route
          exact
          path={match.url}
          render={() => (
            <div>
              <p>Please select a contact.</p>
            </div>
          )}
        />
      </div>
    );
  }
}

export default Contacts;
