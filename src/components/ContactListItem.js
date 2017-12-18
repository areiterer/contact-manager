import React from "react";
import { NavLink } from "react-router-dom";
import "./ContactListItem.css";

const ContactListItem = props => {
  const contact = props.contact;
  return (
    <div className="contact-list-item">
      <NavLink to={`/contacts/${contact.id}`} activeClassName="activeLink">
        {`${contact.firstName} ${contact.lastName}`}
      </NavLink>
    </div>
  );
};

export default ContactListItem;
