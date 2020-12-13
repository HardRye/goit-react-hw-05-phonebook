import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import css from './Alert.module.css';
import slideTransitions from '../../transitions/slideAlert.module.css';

const Alert = ({ isAlert }) => {
  return (
    <CSSTransition
      in={isAlert}
      timeout={250}
      classNames={slideTransitions}
      unmountOnExit
    >
      <div className={css.container}>
        <p className={css.text}>Contact already exist!</p>
      </div>
    </CSSTransition>
  );
};

Alert.propTypes = {
  isAlert: PropTypes.bool.isRequired,
};

export default Alert;
