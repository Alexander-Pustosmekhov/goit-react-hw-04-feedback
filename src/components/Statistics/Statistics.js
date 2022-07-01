import React from 'react';
import s from './Statistics.module.css';

class Statistics extends React.Component {
  render() {
    return (
      <ul>
        <li className={s.item}>Good: {this.props.good}</li>
        <li className={s.item}>Neutral: {this.props.neutral}</li>
        <li className={s.item}>Bad: {this.props.bad}</li>
        <li className={s.item}>Total: {this.props.total}</li>
        <li className={s.item}>
          Positive feedback:{' '}
          {this.props.positivePercentage ? this.props.positivePercentage : 0}
          {'%'}
        </li>
      </ul>
    );
  }
}

export default Statistics;
