import PropTypes from 'prop-types';

import { MyForm } from './Form.styled';
const { Component } = require('react');

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleAddContact = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <MyForm onSubmit={this.handleSubmit}>
        <label>
          <p>Name:</p>

          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleAddContact}
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
            value={this.state.number}
            onChange={this.handleAddContact}
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
  }
}
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
