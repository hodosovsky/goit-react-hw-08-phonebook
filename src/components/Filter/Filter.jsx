import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { findUserAction } from '../../redux/contacts/slice';

const Filter = ({ value, onChange }) => {
  const dispatch = useDispatch();
  const handleChangeFilter = event => {
    dispatch(findUserAction(event.target.value));
  };
  return (
    <label>
      Find contact by Name
      <br />
      <br />
      <input type="text" value={value} onChange={handleChangeFilter} />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
};
