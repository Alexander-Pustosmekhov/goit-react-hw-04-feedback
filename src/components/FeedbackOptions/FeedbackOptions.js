import React from 'react';
import PropTypes from 'prop-types';
import s from '../FeedbackOptions/FeedbackOptions.module.css';

class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul className={s.buttonList}>
        {options.map((el, index) => {
          return (
            <li key={index} className={s.btnList}>
              <button
                type="button"
                className={s.button}
                onClick={() => {
                  onLeaveFeedback(el);
                }}
              >
                {el}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
