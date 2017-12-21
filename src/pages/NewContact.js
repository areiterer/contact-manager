import React, { Component } from "react";

import "./NewContact.css";

import ContactEditForm from "../components/ContactEditForm";

const NewContact = props => {
  const newContact = {};

  return (
    <div id="newContact">
      <ContactEditForm
        contact={newContact}
        onCancel={props.onCancel}
        onSave={props.onSave}
      />
    </div>
  );
};

export default NewContact;
