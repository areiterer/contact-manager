import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

import * as api from "./api";

import "./App.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import NewContact from "./pages/NewContact";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      editedContact: null
    };

    this.handleSaveContact = this.handleSaveContact.bind(this);
    this.handleEditContact = this.handleEditContact.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
    this.handleDeleteContact = this.handleDeleteContact.bind(this);
    this.createNewContact = this.createNewContact.bind(this);
  }

  componentDidMount() {
    api
      .getContacts()
      .then(response => this.setState({ contacts: response.data }));
  }

  handleEditContact(contact) {
    this.setState({ editedContact: contact.id });
  }

  handleDeleteContact(id) {
    api.deleteContact(id).then(() => {
      this.setState({
        contacts: this.state.contacts.filter(c => c.id !== id)
      });
      this.props.history.push("/contacts");
    });
  }

  handleCancelEdit() {
    this.setState({ editedContact: null });
    this.props.history.push("/contacts");
  }

  handleSaveContact(contact) {
    if (contact.id) {
      this.updateContact(contact);
    } else {
      this.createNewContact(contact);
    }
  }

  updateContact(contact) {
    api.updateContact(contact).then(response => {
      const otherContacts = this.state.contacts.filter(
        c => c.id !== contact.id
      );
      this.setState({
        contacts: [...otherContacts, response.data],
        editedContact: null
      });
    });
  }

  createNewContact(contact) {
    api.createContact(contact).then(response => {
      const otherContacts = this.state.contacts.filter(c => c !== contact);
      this.setState({
        contacts: [...otherContacts, response.data],
        editedContact: null
      });

      this.props.history.push("/contacts");
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path={`/contacts`}
              render={props => (
                <Contacts
                  data={this.state.contacts}
                  editContact={this.handleEditContact}
                  deleteContact={this.handleDeleteContact}
                  cancelEdit={this.handleCancelEdit}
                  saveContact={this.handleSaveContact}
                  editedContact={this.state.editedContact}
                  {...props}
                />
              )}
            />

            <Route
              path="/new-contact"
              render={props => (
                <NewContact
                  onSave={this.createNewContact}
                  onCancel={this.handleCancelEdit}
                  {...props}
                />
              )}
            />
          </Switch>
        </main>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);
export default AppWithRouter;
