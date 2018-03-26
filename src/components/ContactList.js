import React from "react";

import "./ContactList.css";

import ContactListItem from "./ContactListItem";

const ContactList = ({ contacts }) => {
  if (contacts.length === 0) {
    return;
    <div className="contact-list">
      <p>No contacts found</p>
    </div>;
  } else {
    return (
      <div className="contact-list">
        {contacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
};

export default ContactList;
