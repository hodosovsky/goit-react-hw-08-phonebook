import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { useSelector, useDispatch } from 'react-redux';
import { createUserAction, getConacts } from '../../redux/contacts/slice';
import { MyForm } from './Form.styled';
const { useState } = require('react');

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contactsFromState = useSelector(getConacts);

  const stateMap = {
    name: setName,
    number: setNumber,
  };

  const handleAddContact = event => {
    const { name } = event.target;
    stateMap[name](event.target.value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    const contact = {};
    contact.name = name;
    contact.number = number;
    contact.id = nanoid();

    const findedContact = contact.name.toLowerCase();
    if (
      contactsFromState.find(contact =>
        contact.name.toLowerCase().includes(findedContact)
      )
    ) {
      Report.failure(`${contact.name} is already in contacts`);
    } else {
      dispatch(createUserAction(contact));
    }
    // onSubmit(contact);
    reset();
  };

  return (
    <MyForm onSubmit={handleSubmit}>
      <label>
        <p>Name:</p>

        <input
          type="text"
          name="name"
          value={name}
          onChange={handleAddContact}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></input>
      </label>

      <label>
        <p>Phone Number:</p>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleAddContact}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <br />
      <button type="submit">Add Contact</button>
      <br />
      <br />
    </MyForm>
  );
};

// class oldForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   handleAddContact = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit(this.state);
//     this.reset();
//   };
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <MyForm onSubmit={this.handleSubmit}>
//         <label>
//           <p>Name:</p>

//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleAddContact}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           ></input>
//         </label>

//         <label>
//           <p>Phone Number:</p>
//           <input
//             type="tel"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleAddContact}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <br />
//         <br />
//         <button type="submit">Add Contact</button>
//         <br />
//         <br />
//       </MyForm>
//     );
//   }
// }
// Form.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default Form;
