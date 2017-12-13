import React from "react";

import "./ContactDetail.css";

const ContactDetail = props => (
  <div className="contactDetail">{JSON.stringify(props.contact)}</div>
);

export default ContactDetail;
