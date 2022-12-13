import { ContactList, Container } from './ContactsPage.styled';
import Form from '../../components/Form/Form';
import Contacts from '../../components/Contacts/Contacts';
import Filter from '../../components/Filter/Filter';

const ContactsPage = () => {
  return (
    <Container>
      <h2>Phonebook</h2>
      <Form />
      <Filter />
      <h2>Contacts</h2>
      <ContactList className="contact__list">
        <Contacts />
      </ContactList>
    </Container>
  );
};

export default ContactsPage;
