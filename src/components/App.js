import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Header from './Header/Header';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import Alert from './Alert/Alert';

import * as phonebookActions from '../redux/phonebookActions';
import contacts from '../contacts.json';

import css from './App.module.css';
import slideTransitions from '../transitions/slideTitle.module.css';

class App extends Component {
  static propTypes = {
    fetchContacts: PropTypes.func.isRequired,
  };

  state = {
    isLoaded: false,
    isAlert: false,
  };

  componentDidMount() {
    const { isLoaded } = this.state;
    this.setState({ isLoaded: !isLoaded });
    const { fetchContacts } = this.props;
    fetchContacts(contacts);
  }

  handleAlert = () => {
    this.setState({ isAlert: true });
    setTimeout(() => this.setState({ isAlert: false }), 2000);
  };

  render() {
    const { isLoaded, isAlert } = this.state;

    return (
      <div className={css.container}>
        <CSSTransition
          in={isLoaded}
          timeout={500}
          classNames={slideTransitions}
          unmountOnExit
        >
          <Header />
        </CSSTransition>

        <ContactForm handleAlert={this.handleAlert} />
        <Filter />
        <ContactList />
        <Alert isAlert={isAlert} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: contactsArr =>
    dispatch(phonebookActions.fetchContacts(contactsArr)),
});

export default connect(null, mapDispatchToProps)(App);
