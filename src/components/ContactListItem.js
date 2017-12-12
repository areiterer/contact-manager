import React from "react";
import { Link } from "react-router-dom";
import "./ContactListItem.css";

const ContactListItem = props => {
  const contact = props.contact;
  return (
    <div className="contact-list-item">
      <Link to={`/contacts/${contact.id}`}>
        {`${contact.firstName} ${contact.lastName}`}
      </Link>
    </div>
  );
};

export default ContactListItem;
