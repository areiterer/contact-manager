import React from "react";
import "./ContactListItem.css";

const ContactListItem = props => (
  <div className="contact-list-item">{props.name}</div>
);

export default ContactListItem;
