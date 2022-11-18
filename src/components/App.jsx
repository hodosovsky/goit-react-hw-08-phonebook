import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList, Container } from './App.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
// model.id = nanoid();
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter.jsx';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  getVisibleContacts = () => {
    const normalaziedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalaziedFilter)
    );
  };
  formSubmitHandler = data => {
    data.id = nanoid();
    const findedContact = data.name.toLowerCase();
    if (
      this.state.contacts.find(contact =>
        contact.name.toLowerCase().includes(findedContact)
      )
    ) {
      Report.failure(`${data.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [data, ...prevState.contacts],
      }));
    }
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  deletedContact = event => {
    const nameToDelete = event.currentTarget.name;

    const deletedList = this.state.contacts.filter(
      contact => !contact.name.includes(nameToDelete)
    );

    this.setState(prevState => ({
      contacts: deletedList,
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitHandler} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <h2>Contacts</h2>
        <ContactList className="contact__list">
          <Contacts options={visibleContacts} onClick={this.deletedContact} />
        </ContactList>
      </Container>
    );
  }
}

export { App };
