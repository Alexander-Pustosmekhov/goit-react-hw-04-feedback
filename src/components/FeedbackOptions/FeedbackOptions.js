import React from 'react';
import s from '../Feedback/Feedback.module.css';

class FeedbackOptions extends React.Component {
  render() {
    return (
      <ul className={s.buttonList}>
        {this.props.options.map((el, index) => {
          return (
            <li key={index}>
              <button
                type="button"
                className={s.button}
                onClick={() => {
                  this.props.onLeaveFeedback(el);
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

export default FeedbackOptions;
