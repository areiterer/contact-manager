import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./Contacts.css";

import ContactList from "../components/ContactList";
import ContactEditForm from "../components/ContactEditForm";
import ContactDetailView from "../components/ContactDetailView";

class Contacts extends Component {
  render() {
    const match = this.props.match;

    return (
      <div className="contacts">
        <ContactList contacts={this.props.data} />

        <Route
          path={`${match.url}/:id`}
          render={props => this.renderContactDetails(props)}
        />
        <Route
          exact
          path={match.url}
          render={() => (
            <div id="contactDetail">
              <p>Please select a contact.</p>
            </div>
          )}
        />
      </div>
    );
  }

  renderContactDetails(routeProps) {
    // get selected contact by the id that was passed in the URL
    const selectedContact = this.props.data.find(
      c => c.id === routeProps.match.params.id
    );

    if (selectedContact) {
      return (
        <div id="contactDetail">
          {this.props.editedContact ? (
            <ContactEditForm
              contact={selectedContact}
              onCancel={this.props.cancelEdit}
              onSave={this.props.saveContact}
            />
          ) : (
            <ContactDetailView
              contact={selectedContact}
              onEdit={this.props.editContact}
              onDelete={this.props.deleteContact}
            />
          )}
        </div>
      );
    } else {
      return (
        <div>
          <p>Contact not found</p>
        </div>
      );
    }
  }
}

export default Contacts;
