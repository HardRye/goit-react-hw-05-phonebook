import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as selectors from '../../redux/phonebookSelectors';
import * as actions from '../../redux/phonebookActions';

import css from './Filter.module.css';

class Filter extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,
    filter: PropTypes.string.isRequired,
    inputFilter: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { value } = e.target;
    const { inputFilter } = this.props;
    inputFilter(value);
  };

  render() {
    const { filter, contacts } = this.props;

    return (
      contacts.length > 1 && (
        <div className={css.container}>
          <p className={css.text}>Find contacts by name</p>
          <input
            type="text"
            className={css.input}
            placeholder="Enter name..."
            name="filter"
            value={filter}
            onChange={this.handleChange}
          />
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({
  filter: selectors.getFilter(state),
  contacts: selectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  inputFilter: e => dispatch(actions.inputFilter(e)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
