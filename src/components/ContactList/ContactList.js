import React from 'react';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import * as selectors from '../../redux/phonebookSelectors';
import * as actions from '../../redux/phonebookActions';

import css from './ContactList.module.css';
import slideTransitions from '../../transitions/slideList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <TransitionGroup component="ul" className={css.list} c>
      {contacts.map(contact => (
        <CSSTransition
          key={contact.id}
          timeout={250}
          classNames={slideTransitions}
          unmountOnExit
        >
          <li className={css.item}>
            <span>{`${contact.name}: ${contact.number}`}</span>
            <button type="button" onClick={() => deleteContact(contact.id)}>
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: selectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
