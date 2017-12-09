import React from "react";

import ContactListItem from "./ContactListItem";

import "./ContactList.css";

const ContactList = props => {
  return (
    <div className="contact-list">
      {props.contacts.map(contact => <ContactListItem name={contact.name} />)}
    </div>
  );
};

export default ContactList;
