import { Component } from 'react';
import { Button } from '../Button/Button';
// import css from './FeedbackOptions.module.css'

export class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    // const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <>
        <Button options={options} onLeaveFeedback={this.handleClick} />
      </>
    );
  }
}
