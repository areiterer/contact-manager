import React, { Component } from "react";
import { withRouter } from "react-router";

import * as api from "../api";

import "./NewContact.css";

import ContactDetailForm from "../components/ContactDetailForm";

class NewContact extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.onCancelEdit = this.onCancelEdit.bind(this);
    this.onSaveChanges = this.onSaveChanges.bind(this);
  }

  onCancelEdit() {
    this.props.history.push("/contacts");
  }

  onSaveChanges(newContact) {
    api.createContact(newContact);
  }

  render() {
    const newContact = {};

    return (
      <div id="newContact">
        <ContactDetailForm
          contact={newContact}
          onCancel={this.onCancelEdit}
          onSave={this.onSaveChanges}
        />
      </div>
    );
  }
}

const NewContactWithRouter = withRouter(NewContact);
export default NewContactWithRouter;
