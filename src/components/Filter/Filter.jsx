import { useDispatch } from 'react-redux';
import { findUserAction } from 'redux/filter/slice';
const Filter = () => {
  const dispatch = useDispatch();
  const handleChangeFilter = event => {
    dispatch(findUserAction(event.target.value));
  };
  return (
    <label>
      Find contact by Name
      <br />
      <br />
      <input type="text" onChange={handleChangeFilter} />
    </label>
  );
};

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   // onChange: PropTypes.func.isRequired,
// };
