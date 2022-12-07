import PropTypes from 'prop-types';
import { Button } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import {
  deleteUserAction,
  getConacts,
  getFilterValue,
} from '../../redux/contacts/slice';
import { useSelector } from 'react-redux';

const Contacts = ({ options }) => {
  const dispatch = useDispatch();

  const contactsFromState = useSelector(getConacts);
  const filter = useSelector(getFilterValue);

  // useEffect(() => {}, [contactsFromState]);

  const getVisibleContacts = () => {
    const normalaziedFilter = filter.toLowerCase();
    return contactsFromState.filter(contact =>
      contact.name.toLowerCase().includes(normalaziedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  const handleDeleteContact = e => {
    dispatch(deleteUserAction(e.target.name));
  };
  return (
    <>
      {visibleContacts.map(visibleContact => (
        <li key={visibleContact.id} className="list__item">
          <span>{visibleContact.name} </span>
          <span>{visibleContact.number}</span>
          <Button
            type="button"
            name={visibleContact.name}
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
