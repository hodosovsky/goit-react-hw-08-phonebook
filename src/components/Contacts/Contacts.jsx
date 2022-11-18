import PropTypes from 'prop-types';
import { Button } from './Contacts.styled';

const Contacts = ({ options, onClick }) => {
  return (
    <>
      {options.map(option => (
        <li key={option.id} className="list__item">
          <span>{option.name} </span>
          <span>{option.number}</span>
          <Button type="button" name={option.name} onClick={onClick}>
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
  onClick: PropTypes.func.isRequired,
};

export default Contacts;
