import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid'; // usage - uuidv4();
import * as phonebookActions from '../../redux/phonebookActions';
import * as selectors from '../../redux/phonebookSelectors';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  static propTypes = {
    handleAlert: PropTypes.func.isRequired,
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { addContact, contacts, handleAlert } = this.props;

    if (!name) {
      return;
    }

    const isNameInContacts = contacts.some(contact =>
      contact.name.toLowerCase().includes(name.trim().toLowerCase()),
    );

    if (isNameInContacts) {
      handleAlert();
      this.clearInputs();
      return;
    }

    addContact({
      id: uuidv4(),
      name,
      number,
    });
    this.clearInputs();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  clearInputs = () =>
    this.setState({
      name: '',
      number: '',
    });

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit} className={css.form}>
        <label htmlFor="name" className={css.label}>
          Name
          <input
            type="text"
            className={css.input}
            placeholder="Enter name..."
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="number" className={css.label}>
          Number
          <input
            type="text"
            className={css.input}
            placeholder="Enter number..."
            name="number"
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <div>
          <button type="submit" className={css.submit}>
            Add contact
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: selectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(phonebookActions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
