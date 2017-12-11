import React from "react";

import ContactListItem from "./ContactListItem";

import "./ContactList.css";

const ContactList = props => (
  <div className="contact-list">
    {props.contacts.map(contact => (
      <ContactListItem key={contact.id} contact={contact} />
    ))}
  </div>
);

export default ContactList;
