import React, { Component } from "react";
import { withRouter } from "react-router";

import * as api from "../api";

import "./NewContact.css";

import ContactEditForm from "../components/ContactEditForm";

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

  onSaveChanges(contact) {
    api.createContact(contact).then(response => {
      this.props.history.push("/contacts");
    });
  }

  render() {
    const newContact = {};

    return (
      <div id="newContact">
        <ContactEditForm
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
