import PropTypes from 'prop-types';
import { Button } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { getConacts, getFilterValue } from 'redux/selectors';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsersThunk, deleteContactsThunk } from 'redux/contacts/thunk.users';

const Contacts = ({ options }) => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilterValue);

  useEffect(() => {
    dispatch(getUsersThunk({}));
  }, [dispatch]);
  const contactsFromState = useSelector(getConacts);

  const getVisibleContacts = () => {
    const normalaziedFilter = filter?.toLowerCase();
    return contactsFromState?.filter(contact =>
      contact.name.toLowerCase().includes(normalaziedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  const handleDeleteContact = e => {
    // dispatch(deleteUserAction(e.target.id));
    dispatch(deleteContactsThunk(e.target.id));
  };
  return (
    <>
      {visibleContacts?.map(visibleContact => (
        <li key={visibleContact.id} className="list__item">
          <span>{visibleContact.name} </span>
          <br />
          <span>{visibleContact.phone}</span>
          <Button
            type="button"
            id={visibleContact.id}
            onClick={handleDeleteContact}
          >
            Delete
          </Button>
        </li>
      ))}
    </>
  );
};

Contacts.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  // onClick: PropTypes.func.isRequired,
};

export default Contacts;
