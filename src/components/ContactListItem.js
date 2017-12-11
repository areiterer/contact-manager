import React from "react";
import "./ContactListItem.css";

const ContactListItem = props => {
  const contact = props.contact;
  return (
    <div className="contact-list-item">
      {`${contact.firstName} ${contact.lastName}`}
    </div>
  );
};

export default ContactListItem;
