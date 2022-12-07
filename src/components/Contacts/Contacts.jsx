import PropTypes from 'prop-types';
import { Button } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteUserAction } from '../../redux/contacts/slice';

const Contacts = ({ options }) => {
  const dispatch = useDispatch();
  const handleDeleteContact = e => {
    dispatch(deleteUserAction(e.target.name));
  };
  return (
    <>
      {options.map(option => (
        <li key={option.id} className="list__item">
          <span>{option.name} </span>
          <span>{option.number}</span>
          <Button
            type="button"
            name={option.name}
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
