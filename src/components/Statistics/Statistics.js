import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

class Statistics extends React.Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <ul>
        <li className={s.item}>Good: {good}</li>
        <li className={s.item}>Neutral: {neutral}</li>
        <li className={s.item}>Bad: {bad}</li>
        <li className={s.item}>Total: {total}</li>
        <li className={s.item}>
          Positive feedback:{' '}
          {this.props.positivePercentage ? positivePercentage : 0}
          {'%'}
        </li>
      </ul>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
