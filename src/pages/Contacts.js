import React, { Component } from "react";
import { Route } from "react-router-dom";

import * as api from "../api";

import "./Contacts.css";

import ContactList from "../components/ContactList";
import ContactDetail from "../components/ContactDetail";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      editedContact: null
    };

    this.handleSaveContact = this.handleSaveContact.bind(this);
    this.handleEditContact = this.handleEditContact.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
  }

  componentDidMount() {
    api
      .getContacts()
      .then(response => this.setState({ contacts: response.data }));
  }

  handleEditContact(contact) {
    this.setState({ editedContact: contact.id });
  }

  handleCancelEdit() {
    this.setState({ editedContact: null });
  }

  handleSaveContact(contact) {
    // TODO: PUT if contact.id exists - otherwise POST
    if (contact.id) {
      api.updateContact(contact).then(response => {
        const otherContacts = this.state.contacts.filter(
          c => c.id !== contact.id
        );
        this.setState({
          contacts: [...otherContacts, response.data],
          editedContact: null
        });
      });
    } else {
      api.createContact(contact).then(response => {
        const otherContacts = this.state.contacts.filter(c => c !== contact);
        this.setState({
          contacts: [...otherContacts, response.data],
          editedContact: null
        });
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
          render={props => {
            const selectedContact = this.state.contacts.find(
              c => c.id === props.match.params.id
            );

            return (
              <ContactDetail
                editing={this.state.editedContact}
                contact={selectedContact}
                onCancelEdit={this.handleCancelEdit}
                onEditContact={this.handleEditContact}
                onSaveContact={this.handleSaveContact}
                {...props}
              />
            );
          }}
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
