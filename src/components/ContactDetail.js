import React from "react";

import "./ContactDetail.css";

const ContactDetail = props => {
  const contact = props.contact;

  return (
    <div className="contactDetail">
      <h1>
        {contact.firstName} {contact.lastName}
      </h1>
      <p>
        {contact.street} {contact.house} <br />
        {contact.zip} {contact.city}
      </p>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
    </div>
  );
};

export default ContactDetail;
