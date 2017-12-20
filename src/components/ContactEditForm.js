import React, { Component } from "react";

import "./ContactEditForm.css";

class ContactEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentContact: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        street: "",
        house: "",
        zip: "",
        city: ""
      }
    };
  }

  componentDidMount() {
    this.setState({
      currentContact: Object.assign(
        {},
        this.state.currentContact,
        this.props.contact
      )
    });
  }

  render() {
    return (
      <div>
        <div className="toolbar">
          <button onClick={this.props.onCancel}>Cancel</button>
          <button onClick={() => this.props.onSave(this.state.currentContact)}>
            Save
          </button>
        </div>
        <form id="contactForm">
          <div className="section">
            <h2>Contact Details</h2>
            <div>
              <input
                type="text"
                value={this.state.currentContact.firstName}
                onChange={event =>
                  this.setState({
                    currentContact: {
                      ...this.state.currentContact,
                      firstName: event.target.value
                    }
                  })
                }
                placeholder="First name"
                name="firstName"
              />
              <input
                type="text"
                value={this.state.currentContact.lastName}
                onChange={event =>
                  this.setState({
                    currentContact: {
                      ...this.state.currentContact,
                      lastName: event.target.value
                    }
                  })
                }
                placeholder="Last name"
                name="lastName"
              />
            </div>
            <div>
              <input
                type="text"
                value={this.state.currentContact.email}
                onChange={event =>
                  this.setState({
                    currentContact: {
                      ...this.state.currentContact,
                      email: event.target.value
                    }
                  })
                }
                placeholder="Email"
                name="email"
              />
            </div>
            <div>
              <input
                type="text"
                value={this.state.currentContact.phone}
                onChange={event =>
                  this.setState({
                    currentContact: {
                      ...this.state.currentContact,
                      phone: event.target.value
                    }
                  })
                }
                placeholder="Phone"
                name="phone"
              />
            </div>
          </div>
          <div className="section">
            <h2>Address</h2>
            <div>
              <input
                type="text"
                value={this.state.currentContact.street}
                onChange={event =>
                  this.setState({
                    currentContact: {
                      ...this.state.currentContact,
                      street: event.target.value
                    }
                  })
                }
                placeholder="Street"
                name="street"
              />
              <input
                type="text"
                value={this.state.currentContact.house}
                onChange={event =>
                  this.setState({
                    currentContact: {
                      ...this.state.currentContact,
                      house: event.target.value
                    }
                  })
                }
                placeholder="House"
                name="house"
              />
            </div>
            <div>
              <input
                type="text"
                value={this.state.currentContact.zip}
                onChange={event =>
                  this.setState({
                    currentContact: {
                      ...this.state.currentContact,
                      zip: event.target.value
                    }
                  })
                }
                placeholder="Zip Code"
                name="zip"
              />
              <input
                type="text"
                value={this.state.currentContact.city}
                onChange={event =>
                  this.setState({
                    currentContact: {
                      ...this.state.currentContact,
                      city: event.target.value
                    }
                  })
                }
                placeholder="City"
                name="city"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactEditForm;
