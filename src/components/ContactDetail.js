import React from "react";

import "./ContactDetail.css";

const ContactDetail = props => {
  const contact = props.contact;

  return (
    <div className="contactDetail">
      <div id="info">
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
      <div id="notes">
        <h2>Notes</h2>
      </div>
    </div>
  );
};

export default ContactDetail;
