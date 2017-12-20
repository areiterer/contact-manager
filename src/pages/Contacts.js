import React, { Component } from "react";
import { Route } from "react-router-dom";

import * as api from "../api";

import "./Contacts.css";

import ContactList from "../components/ContactList";

import ContactEditForm from "../components/ContactEditForm";
import ContactDetailView from "../components/ContactDetailView";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      editedContact: null
    };

    this.renderContactDetails = this.renderContactDetails.bind(this);

    this.handleSaveContact = this.handleSaveContact.bind(this);
    this.handleEditContact = this.handleEditContact.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
    this.handleDeleteContact = this.handleDeleteContact.bind(this);
  }

  componentDidMount() {
    api
      .getContacts()
      .then(response => this.setState({ contacts: response.data }));
  }

  handleEditContact(contact) {
    this.setState({ editedContact: contact.id });
  }

  handleDeleteContact(id) {
    api.deleteContact(id).then(() =>
      this.setState({
        contacts: this.state.contacts.filter(c => c.id !== id)
      })
    );
  }

  handleCancelEdit() {
    this.setState({ editedContact: null });
  }

  handleSaveContact(contact) {
    // TODO: PUT if contact.id exists - otherwise POST
    if (contact.id) {
      this.updateContact(contact);
    } else {
      this.createNewContact(contact);
    }
  }

  updateContact(contact) {
    api.updateContact(contact).then(response => {
      const otherContacts = this.state.contacts.filter(
        c => c.id !== contact.id
      );
      this.setState({
        contacts: [...otherContacts, response.data],
        editedContact: null
      });
    });
  }

  createNewContact(contact) {
    api.createContact(contact).then(response => {
      const otherContacts = this.state.contacts.filter(c => c !== contact);
      this.setState({
        contacts: [...otherContacts, response.data],
        editedContact: null
      });
    });
  }

  renderContactDetails(props) {
    // get selected contact by the id that was passed in the URL
    const selectedContact = this.state.contacts.find(
      c => c.id === props.match.params.id
    );

    if (selectedContact) {
      return (
        <div id="contactDetail">
          {this.state.editedContact ? (
            <ContactEditForm
              contact={selectedContact}
              onCancel={this.handleCancelEdit}
              onSave={this.handleSaveContact}
            />
          ) : (
            <ContactDetailView
              contact={selectedContact}
              onEdit={this.handleEditContact}
              onDelete={this.handleDeleteContact}
            />
          )}
        </div>
      );
    } else {
      return (
        <div>
          <p>Loading ... </p>
        </div>
      );
    }
  }

  render() {
    const match = this.props.match;

    return (
      <div className="contacts">
        <ContactList contacts={this.state.contacts} />

        <Route
          path={`${match.url}/:id`}
          render={props => this.renderContactDetails(props)}
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
