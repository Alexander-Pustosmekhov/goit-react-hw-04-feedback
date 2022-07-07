import PropTypes from 'prop-types';
import s from '../FeedbackOptions/FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
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

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
