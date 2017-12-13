import React from "react";

import "./ContactDetail.css";

const ContactDetail = props => {
  const contact = props.contact;

  return (
    <div className="contactDetail">
      <p>
        <span className="label">First name: </span>
        <span className="value">{contact.firstName}</span>
      </p>
      <p>
        <span className="label">Last name: </span>
        <span className="value">{contact.lastName}</span>
      </p>
      <p>
        <span className="label">Email: </span>
        <span className="value">{contact.email}</span>
      </p>
    </div>
  );
};

export default ContactDetail;
