import React from "react";
import "./ContactDetail.css";

import ContactEditForm from "./ContactEditForm";
import ContactDetailView from "./ContactDetailView";

const ContactDetail = props => {
  const selectedContact = props.contact;

  if (selectedContact) {
    return (
      <div id="contactDetail">
        {props.editing ? (
          <ContactEditForm
            contact={selectedContact}
            onCancel={props.onCancelEdit}
            onSave={props.onSaveContact}
          />
        ) : (
          <ContactDetailView
            onEdit={props.onEditContact}
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
};

export default ContactDetail;
