import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Notification.module.css'

export class Notification extends Component {
  render() {
    return <p className={css.title}>{this.props.message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};


