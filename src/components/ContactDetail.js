import React, { Component } from "react";
import "./ContactDetail.css";

import ContactDetailForm from "./ContactDetailForm";
import ContactDetailView from "./ContactDetailView";

class ContactDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };

    this.onSaveChanges = this.onSaveChanges.bind(this);
    this.onCancelEdit = this.onCancelEdit.bind(this);
    this.onEdit = this.onEdit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // If another contact is selected from the list and we're in edit mode, cancel the edit mode
    if (this.props.match.params.id !== nextProps.match.params.id) {
      this.setState({ isEditing: false });
    }
  }

  onEdit() {
    this.setState({ isEditing: true });
  }

  onSaveChanges(contact) {
    this.props.onSaveContact(contact).then(this.setState({ isEditing: false }));
  }

  onCancelEdit() {
    this.setState({ isEditing: false });
  }

  render() {
    const selectedContactId = this.props.match.params.id;
    const selectedContact = this.props.data.find(
      c => c.id === selectedContactId
    );

    if (selectedContact) {
      return (
        <div id="contactDetail">
          {this.state.isEditing ? (
            <ContactDetailForm
              contact={selectedContact}
              onCancel={this.onCancelEdit}
              onSave={this.onSaveChanges}
            />
          ) : (
            <ContactDetailView onEdit={this.onEdit} contact={selectedContact} />
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
