import axios from "axios";

const ROOT_URL = "http://localhost:8000";

export function getContacts() {
  return axios.get(`${ROOT_URL}/contacts`);
}

export function updateContact(contact) {
  return axios.put(`${ROOT_URL}/contacts/${contact.id}`, contact);
}

export function createContact(contact) {
  return axios.post(`${ROOT_URL}/contacts`, contact);
}

export function deleteContact(contactId) {
  return axios.delete(`${ROOT_URL}/contacts/${contactId}`);
}
