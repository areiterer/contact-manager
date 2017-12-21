import React from "react";

import "./ContactList.css";

import ContactListItem from "./ContactListItem";

const ContactList = props => (
  <div className="contact-list">
    {props.contacts.length > 0 ? (
      props.contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))
    ) : (
      <p>No contacts found</p>
    )}
  </div>
);

export default ContactList;
