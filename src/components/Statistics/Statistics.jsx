import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <ul className={css.container}>
        <li className={css.item}>
          <p className={css.good}>{good}</p>
          <p className={css.good_txt}>Good 😀</p>
        </li>
        <li className={css.item}>
          <p className={css.neutral}>{neutral}</p>
          <p className={css.neutral_txt}>Neutral 🙂</p>
        </li>
        <li className={css.item}>
          <p className={css.bad}>{bad}</p>
          <p className={css.bad_txt}>Bad 😐</p>
        </li>
        <li className={css.item}>
          <p className={css.total}>{total}</p>
          <p className={css.total_txt}>Total</p>
        </li>
        <li className={css.item}>
          <p className={css.positive}>{positivePercentage}%</p>
          <p className={css.positive_txt}>Positive feadback 😉</p>
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
