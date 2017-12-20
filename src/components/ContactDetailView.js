import React from "react";

import "./ContactDetailView.css";

const ContactDetailView = props => {
  const contact = props.contact;
  return (
    <div id="detailView">
      <div className="toolbar">
        <button onClick={() => props.onEdit(contact)}>Edit</button>
      </div>
      <h1>
        {contact.firstName} {contact.lastName}
      </h1>
      <div id="address">
        <p>
          {contact.street} {contact.house} <br />
          {contact.zip} {contact.city}
        </p>
      </div>
      <div className="contactInfo">
        <p>{contact.phone}</p>
      </div>
      <div className="contactInfo">
        <p>{contact.email}</p>
      </div>
    </div>
  );
};

export default ContactDetailView;
