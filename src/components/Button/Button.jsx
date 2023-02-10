import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './Button.module.css'

export class Button extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul className={css.feedbackList}>
        {options.map(option => (
          <li key={option}>
            <button
              className={css.btn}
              type="button"
              value={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

Button.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
};


