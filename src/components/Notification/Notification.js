import React from 'react';
import s from './Notification.module.css';

class Notification extends React.Component {
  render() {
    return <p className={s.text}>{this.props.message} &#128542;</p>;
  }
}

export default Notification;
