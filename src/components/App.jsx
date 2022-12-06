import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactList, Container } from './App.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useSelector, useDispatch } from 'react-redux';
import {
  createUserAction,
  deleteUserAction,
  findUserAction,
  getFilterValue,
  getConacts,
} from '../redux/contacts/slice';
import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter.jsx';

const App = () => {
  const dispatch = useDispatch();
  const contactsFromState = useSelector(getConacts);
  const filter = useSelector(getFilterValue);

  useEffect(() => {
    // localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contactsFromState]);

  const getVisibleContacts = () => {
    const normalaziedFilter = filter.toLowerCase();
    return contactsFromState.filter(contact =>
      contact.name.toLowerCase().includes(normalaziedFilter)
    );
  };

  const handleChangeFilter = event => {
    dispatch(findUserAction(event.currentTarget.value));
  };

  const handleFormSubmit = data => {
    data.id = nanoid();

    const findedContact = data.name.toLowerCase();
    if (
      contactsFromState.find(contact =>
        contact.name.toLowerCase().includes(findedContact)
      )
    ) {
      Report.failure(`${data.name} is already in contacts`);
    } else {
      dispatch(createUserAction(data));
    }
  };

  const handleDeleteContact = e => {
    dispatch(deleteUserAction(e.target.name));
  };
  return (
    <Container>
      <h2>Phonebook</h2>
      <Form onSubmit={handleFormSubmit} />
      <Filter value={filter} onChange={handleChangeFilter} />
      <h2>Contacts</h2>
      <ContactList className="contact__list">
        <Contacts
          options={getVisibleContacts()}
          onClick={handleDeleteContact}
        />
      </ContactList>
    </Container>
  );
};

export { App };
