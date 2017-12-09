import React from "react";

import ContactListItem from "./ContactListItem";

const ContactList = props => {
  return (
    <div>
      {props.contacts.map(contact => <ContactListItem name={contact.name} />)}
    </div>
  );
};

export default ContactList;
