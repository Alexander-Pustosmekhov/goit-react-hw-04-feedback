import React from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

class Notification extends React.Component {
  render() {
    return <p className={s.text}>{this.props.message}... &#128542;</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
