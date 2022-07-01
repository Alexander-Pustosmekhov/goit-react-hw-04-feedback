import React from 'react';
import s from '../Feedback/Feedback.module.css';

class Statistics extends React.Component {
  render() {
    return (
      <ul>
        <li>Good: {this.props.good}</li>
        <li>Neutral: {this.props.neutral}</li>
        <li>Bad: {this.props.bad}</li>
        <li>Total: {this.props.total}</li>
        <li>
          Positive feedback:{' '}
          {this.props.positivePercentage ? this.props.positivePercentage : 0}
          {'%'}
        </li>
      </ul>
    );
  }
}

export default Statistics;
