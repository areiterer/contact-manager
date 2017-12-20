import React, { Component } from "react";
import "./ContactDetail.css";

import ContactEditForm from "./ContactEditForm";
import ContactDetailView from "./ContactDetailView";

class ContactDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  componentWillReceiveProps(nextProps) {
    // If another contact is selected from the list and we're in edit mode, cancel the edit mode
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.setState({ isEditing: false });
    }
  }

  render() {
    const selectedContact = this.props.contact;

    if (selectedContact) {
      return (
        <div id="contactDetail">
          {this.props.editing ? (
            <ContactEditForm
              contact={selectedContact}
              onCancel={this.props.onCancelEdit}
              onSave={this.props.onSaveContact}
            />
          ) : (
            <ContactDetailView
              onEdit={this.props.onEditContact}
              contact={selectedContact}
            />
          )}
        </div>
      );
    } else {
      return (
        <div className="contactDetail">
          <p>Please select a Contact</p>
        </div>
      );
    }
  }
}

export default ContactDetail;
