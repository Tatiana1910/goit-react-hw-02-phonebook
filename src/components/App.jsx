import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactItem } from './ContactItem/ContactItem';
import { Container, Title } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = newContact => {
    this.state.contacts.filter(contact => contact.name === newContact.name)
      .length
      ? alert(`${newContact.name}: is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <Container>
        <GlobalStyle />
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <ContactItem
          contacts={this.state.contacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}