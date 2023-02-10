import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';


export class App extends Component {
  render() {
    return (
      <>
        <Section title="Please leave feedback"/>
        <FeedbackOptions />
      </>
    );
  }
}
