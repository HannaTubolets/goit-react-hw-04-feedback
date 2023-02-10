import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions />
        </Section>
        <Section title="Statistics">
          <Statistics></Statistics>
          <Notification message="No feedback given" />
        </Section>
      </>
    );
  }
}
